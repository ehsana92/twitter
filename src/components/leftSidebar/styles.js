import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    width: '25%',
    padding: '1.5rem 2rem',
    overflow:'scroll'
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
    width:'max-content'
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
}));


export default useStyles;