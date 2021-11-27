import React, { useEffect, useState } from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import TweetList from "../home/components/TweetList";
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { getTweetsByHashTagRequest } from '../api/api_tweet';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'

const TweetsByHashTag = (props) => {
  const classes = useStyle();
  const location = useLocation();

  const { tweetList } = useTweetState();
  const tweetDispatch = useTweetDispatch();


  useEffect(() => {
    getTweetsByHashTagRequest(props.match.params.hashtag, (isOk, data) => {
      if (!isOk)
        return toast.error(data);
      setTweetList(tweetDispatch, data);
    })
  }, [location]);

  return (
    <div className={classes.root}>
      <Header title={props.match.params.hashtag} icon={<img src={"/image/hashtag.png"} />} />
      <Divider className={classes.divider} />
      <TweetList data={tweetList} />
    </div>
  );
};

export default TweetsByHashTag;