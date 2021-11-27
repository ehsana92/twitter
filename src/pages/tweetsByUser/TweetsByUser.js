import React, { useEffect, useState } from 'react';
import useStyle from "../home/styles";
import Header from "../../components/header/Header";
import Divider from "@material-ui/core/Divider";
import TweetList from "../home/components/TweetList";
import Person from '@material-ui/icons/Person';
import { getTweetsByUserRequest } from '../api/api_tweet';
import { useLocation } from 'react-router-dom'
import { Typography } from '@material-ui/core';


const TweetsByUser = (props) => {

  const classes = useStyle();
  const location = useLocation();

  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweetsByUserRequest(props.match.params.id, (isOk, data) => {
      if (!isOk)
        return alert(data.message);
      setTweets(data);
    })
  }, [location]);

  return (
    <div className={classes.root}>
      <Header title={props.match.params.name} icon={<Person />} />
      <Divider className={classes.divider} />
      {!tweets.length &&
        <Typography style={{ textAlign: 'center' }}>این کاربر تاکنون هیچ توئیتی نداشته است</Typography>
      }
      <TweetList data={tweets} />
    </div>
  );
};

export default TweetsByUser;