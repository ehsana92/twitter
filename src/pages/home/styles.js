import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#e6e6e6',
  },
  header: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex'
  }, headerTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginRight: '0.5rem'
  },
  divider: {
    backgroundColor: '#7EBAFF',
    filter: 'opacity(0.18)'
  },
  newTweet: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  tweetItem: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem',
    fontFamily: 'shabnam',
  },
  input: {
    marginRight: '1rem',
    border: 'none',
    flex: 1,
    fontWeight: 400,
    "&:focus": {
      outline: 'unset',
    }
  },
  newTweetBtn: {
    color: "white !important",
    borderRadius: "1rem !important",
    minHeight: "30px !important",
    height: "30px !important",
    fontFamily: "shabnam !important",
    lineHeight: "1rem !important",
    minWidth: "5rem !important"
  },
  newTweetImg: {},
  newTweetImgBtn: {
    borderRadius: "50%",
    padding: "0.2rem !important",
    border: "0.5px solid #3337",
    marginLeft: "1rem",
    color: 'red!important'
  },
  tweetItemName: {
    fontWeight: 600,
  },
  tweetItemId: {
    color: 'gray',
    marginRight: 10
  },
  tweetText: {
    fontSize: '0.9rem',
    marginTop: '0.75rem',
    fontFamily: 'shabnam'
  },
  likeCount: {
    fontSize: '0.8rem',
    // color: theme.palette.text.hint,
    color: "gray",
    marginLeft: '0.5rem',
  },
  tweetImg: {
    width: '10rem', height: '10rem',
    marginTop: '1rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  tweetImg: {
    marginTop: '1rem',
    width: '10rem',
    height: '10rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }
}));


export default useStyles;