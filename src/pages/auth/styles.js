import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    background: 'white',
    width: '30rem',
    display: 'flex',
    margin: '10rem auto',
    flexDirection: 'column',
    fontFamily: 'Shabnam'
  },
  headerText: {
    margin: '1rem',
    alignSelf: 'center'
  },
  tab: {
    flex: 1,
    fontFamily: 'Shabnam!important'
  },
  containerInput: {
    
  }
}));


export default useStyles;