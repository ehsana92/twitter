import React, { useEffect, useState, useRef } from 'react';
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import { getUsers } from '../../pages/api/api_tweet';
import { Route, Link } from 'react-router-dom';
import { Person } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { toast } from 'react-toastify';
import { uploadUserPhoto } from '../../pages/api/api_auth'



export const Twitter = ({ name, id, img }) => {
  const classes = useStyle();
  
  const getImage = () => {
    if (img)
      return img;
    return '/image/userIcon.jpg'
  }

  return <ButtonBase width={'100%'}><Grid container direction={"row"} className={classes.tweeterParent}>
    <img src={getImage()} className={classes.twitterImg} />
    <Grid item container direction={"column"} style={{ width: 'max-content' }} className={classes.tweeterNameParent}>
      <Typography className={classes.profName}>{name}</Typography>
      <Typography className={classes.profId}>{id}</Typography>
    </Grid>
  </Grid></ButtonBase>
}



const LeftSidebar = () => {
  const classes = useStyle();

  const [users, setUsers] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  const [anchorMenu, setAnchorMenu] = useState();
  const inputRef = useRef();

  useEffect(() => {
    getUsers((isOk, data) => {
      if (!isOk)
        return alert('ناموفق در دریافت لیست کاربران');
      setUsers(data);
    })
  }, []);

  const handleToggleMenu = (e) => {
    anchorMenu ? setAnchorMenu(null) : setAnchorMenu(e.currentTarget)
  }

  const getImage = () => {
    if (imagePath)
      return imagePath;
    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image");
    return '/image/userIcon.jpg'
  }


  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadUserPhoto(formData, (isOk, data) => {
        if (!isOk)
          return toast.error(data);
        toast.success('تصویر شما با موفقیت آپلود شد');
        localStorage.setItem("image", data.imagePath)
      });
    }
  }

  return (
    <div className={classes.root}>
      <Grid container direction={"row-reverse"} onClick={handleToggleMenu} style={{ cursor: 'pointer' }}>
        <img src={getImage()} style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <Grid item container direction={"column"} style={{ width: 'max-content' }} className={classes.profText}>
          <Typography className={classes.profName}>{localStorage.getItem('name')}</Typography>
          <Typography className={classes.profId}>{localStorage.getItem('username')}</Typography>
        </Grid>
        <input ref={inputRef} type={'file'} style={{ display: 'none' }} onChange={handleAvatarChange} />
      </Grid>
      <Grid item container direction={"column"} className={classes.tweeterRoot}>
        <Typography className={classes.tweeterTitle}>
          بهترین خبرنگاران
        </Typography>
        <Divider style={{ marginLeft: -24, marginRight: -24 }} />
        {
          users.map((item, index) => {
            return (<Link to={`/users/${item._id}/${item.name}`}>
              <Twitter name={item.name} id={item.username} img={item.image} />
              {index !== users.length - 1 &&
                <Divider style={{ marginLeft: -24, marginRight: -24 }} />
              }
            </Link>)
          })
        }
      </Grid>
      <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
        <MenuItem onClick={() => { inputRef.current.click() }}
          style={{ cursor: 'pointer' }}>
          ویرایش عکس پروفایل
        </MenuItem>
        <MenuItem onClick={() => { localStorage.clear(); window.location.reload() }}
          style={{ cursor: 'pointer' }}>
          خروج
        </MenuItem>
      </Menu>
    </div >
  );
};

export default LeftSidebar;