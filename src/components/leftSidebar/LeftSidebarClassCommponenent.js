import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"
import Twitter from './LeftSidebar';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { getUsers } from '../../pages/api/api_tweet'


const style = {
  root: {
    backgroundColor: 'white',
    width: '25%',
    padding: '1.5rem 2rem'
  },
  profText: {
    marginLeft: '0.5rem',
    width: 'max-content',
    direction: 'ltr'
  },
  tweeterNameParent: {
    marginRight: '0.5rem',
    width: 'max-content',
  },
  profName: {
    flex: 1,
    fontFamily: 'Shabnam !important'
  },
  profId: {
    flex: 1,
    // color: theme.palette.text.primary,
    fontSize: '0.78rem',
    fontFamily: 'Shabnam !important',
    width: 'max-content'
  },
  tweeterRoot: {
    background: "#f5f8fa",
    marginTop: "3rem",
    borderRadius: "2.5rem",
    padding: "11px 24px"
  },
  tweeterTitle: {
    fontSize: '1.1rem !important',
    fontWeight: "600 !important",
    marginBottom: '11px',
    fontFamily: 'shabnam',
  },
  tweeterParent: {
    padding: '10px 0'
  },
  twitterImg: {
    width: 50,
    height: 50,
    borderRadius: '100%'
  }
}

class LeftSidebarClassCommponenent extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    getUsers((isOk, data) => {
      if (!isOk)
        return alert('ناموفق در دریافت لیست کاربران');
      this.setState({
        users: data
      });
    })
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction={"row-reverse"}>
          <img src={"/image/user.jpg"} style={{ width: 'max-content' }} />
          <Grid item container direction={"column"} style={{ width: 'max-content' }} className={classes.profText}>
            <Typography className={classes.profName}>محمد مطواعی</Typography>
            <Typography className={classes.profId}>m.metvaei</Typography>
          </Grid>
        </Grid>
        <Grid item container direction={"column"} className={classes.tweeterRoot}>
          <Typography className={classes.tweeterTitle}>
            بهترین خبرنگاران
          </Typography>
          {
            console.log('item: ' + this.state.users)
          }
          <Divider style={{ marginLeft: -24, marginRight: -24 }} />
          {
            this.state.users.map((item, index) => {
              return (<Link to={`/users/${item.name}`}>
                <Twitter name={item.name} id={item.id} img={item.img} />
                {index !== this.state.users.length - 1 &&
                  <Divider style={{ marginLeft: -24, marginRight: -24 }} />
                }
              </Link>)
            })
          }
        </Grid>
      </div>
    );
  }
};

export default withStyles(style)(LeftSidebarClassCommponenent)

