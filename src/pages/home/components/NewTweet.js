import React, { useState, useRef } from 'react';
import useStyle from '../styles'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classnames from 'classnames';
import { newTweetRequest } from '../../api/api_tweet';
import { toast } from 'react-toastify';
import { setTweetText as setTweet } from '../../../context/TweetContext'
import { tweetDispatch, tweetText, useTweetState, useTweetDispatch, updateHashTagList } from '../../../context/TweetContext'

const NewTweet = ({ updateTweets }) => {
  const inputFile = useRef();
  const { tweetText: tweet } = useTweetState();
  const tweetDispatch = useTweetDispatch();
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  // const [tweet, setTweet] = useState();
  const classes = useStyle();


  const getImage = () => {
    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image");
    return '/image/person2.png'
  }
  const newTweetClick = () => {
    const tweetText = tweet;
    if (!tweetText)
      return;
    const formData = new FormData();
    formData.append("text", tweetText);
    if (imageFile)
      formData.append("image", imageFile);

    newTweetRequest(formData, (isOk, data) => {
      if (!isOk)
        toast.error(data)
      toast.success("توییت شما ارسال شد");
      updateTweets();
      setTweet(tweetDispatch, "");
      setImagePath();
      setImageFile();
      if (tweetText.includes("#"))
        updateHashTagList(tweetDispatch)
    });
  }
  const selectImg = () => {
    inputFile.current.click();
  }

  const onChangeImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }


  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img src={getImage()} style={{ width: 60, height: 60, borderRadius: '50%' }} />
        <input placeholder="توییت می ..." className={classnames(classes.input)}
          value={tweet} onChange={e => setTweet(tweetDispatch, e.target.value)} />
        <input type={"file"} style={{ display: 'none' }} ref={inputFile} onChange={onChangeImg} />
      </Grid>

      {imagePath &&
        <div>
          <div style={{ backgroundImage: `url(${imagePath})` }} className={classes.tweetImg}></div>
        </div>
      }

      <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
        <Button variant={"contained"} color={"primary"} className={classes.newTweetBtn} onClick={newTweetClick}>توییت</Button>
        <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
          <img src={"image/tweetpic.png"} className={classes.newTweetImg} />
        </IconButton>
      </Grid>
    </div >
  );
};

export default NewTweet;