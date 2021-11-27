import React, { useEffect, useState } from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
// import Link from 'react-router-dom';
import { getHashTags } from '../../pages/api/api_tweet'
import { Link } from 'react-router-dom';
import { useTweetState, useTweetDispatch, setHashTagList } from '../../context/TweetContext';

const RightSidebar = () => {

  const classes = useStyle();

  const { hashTags } = useTweetState();
  const tweetDispatch = useTweetDispatch();

  useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk) {
        console.log('err')
      } else {
        setHashTagList(tweetDispatch, data)
      }
    })


  }, []);


  return (
    <div className={classes.root}>
      <Link to={"/"} style={{ textDecoration: 'none' }}>
        <Grid container direction={"row"} alignItems={'center'}>
          <Grid item>
            <img src={"/image/logo.png"} />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>
              توییتر فارسی
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>
        داغ ترین هشتگ ها
      </Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {
          hashTags.map(item => <ButtonBase className={classes.hashTagParent}>
            <Link to={'/hashtags/' + item.text} style={{ width: '100%' }}>
              <Grid item container>
                <img src={"/image/hashtag.png"} />
                <Typography className={classes.hashtag}>
                  {item.text}
                </Typography>
              </Grid>
            </Link>
          </ButtonBase>
          )
        }
      </Grid>
      
    </div >
  );
};

export default RightSidebar;