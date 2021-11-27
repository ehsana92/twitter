import React, { useEffect, useState } from 'react';
import useStyle from './styles'
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import { Home as HomeIcon } from '@material-ui/icons'
import axios from 'axios';
import Search from './components/search';
import { toast } from 'react-toastify';
import { getAllTweets } from '../api/api_tweet'
import { useTweetState, setTweetList, tweetList, useTweetDispatch } from '../../context/TweetContext';

const Home = () => {
  const classes = useStyle();
  const tweetDispatch = useTweetDispatch();
  const { tweetList: tweets } = useTweetState();
  // const [tweets, setTweets] = useState([]);

  useEffect(() => {
    updateTweets();
  }, []);

  const updateTweets = () => {
    getAllTweets((isOk, data) => {
      if (!isOk) {
        return toast.error('ناموفق در دریافت داده');
      }
      setTweetList(tweetDispatch, data);
    })
  }

  return (
    <div className={classes.root}>
      <Search />
      <Header title={'خانه'} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTweet updateTweets={updateTweets} />
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;