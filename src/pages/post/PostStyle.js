import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  cArticle: {
    maxWidth: '70%',
    height: 'auto',
    backgroundColor: '141414',
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  imageCover: {
    width: '100%',
    boxShadow: '10px 10px 29px 8px rgba(0, 0, 0, 0.46)',
    minHeight: '400px',
    margin: '0 auto',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '70%',
    },
  },
  navigateBlock: {
    maxWidth: '20%',
    flexDirection: 'column',
    display: 'flex',
    padding: '10px',
    alignContent: 'center',
    position: 'relative',
    left: '90%',
    right: '0',
    top: '20px',
    [theme.breakpoints.down('sm')]: {
      left: '85%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '70%',
    },
  },
  cHomeLink: {
    color: '#E7DFD5',
    padding: '5px',
    fontSize: '20px',
    margin: '0px',
    textDecoration: 'none',
  },

  estDateBlock: {
    maxWidth: '8%',
    boxShadow: '10px 10px 29px 8px rgba(0, 0, 0, 0.46)',
    position: 'relative',
    left: '0',
    top: '-15px',
    padding: '0px',
    margin: '0px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    height: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '10%',
    },
  },
  estDateStyle: {
    color: 'white',
    width: 'calc(100% + 350px)',
    height: 'auto',
    letterSpacing: '3px',
    position: 'absolute',
    transform: 'rotate(270deg)',
    transformOrigin: '0 0',
    right: '100%',
    top: '-25px',
    fontSize: '20px',
    padding: '2px',
    margin: '0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  est: {
    color: 'rgba(167, 209, 41, 1)',
    padding: '5px',
    fontSize: '16px',
  },
  titleContainer: {
    padding: '0px',
    margin: '15px 10px',
    height: '100px',
    textAlign: 'left',
    borderLeft: '5px solid rgba(97, 111, 57, 1)',
  },
  titleBlock: {
    paddingLeft: '10px',
    paddingTop: '10px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '20px',
    },
  },
  title: {
    color: 'white',
    padding: '0px',
    fontSize: '40px',
    margin: '0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  author: {
    color: 'rgba(62, 67, 46, 1)',
    padding: '0px',
    fontSize: '18px',
    marginTop: '5px',
  },
  content: {
    color: 'white',
    lineHeight: '32px',
    fontSize: '25px',
    ' & img ': {
      width: '100%',
    },
    '& pre': {
      overFlow: 'auto',
    },
    ' & blockquote': {
      borderLeft: '5px solid yellow',
      padding: '10px',
      margin: '0 auto',
      maxWidth: '80%',
    },
    '& blockquote > p': {
      fontSize: '20px',
      paddingLeft: '10px',
      lineHeight: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      '& h1': {
        fontSize: '18px',
      },
      '& blockquote': {
        margin: '0 auto',
        padding: '5px',
        maxWidth: '100%',
      },
      '& blockquote > p': {
        fontSize: '25px',
      },
      '& pre > code': {
        fontSize: '13px',
      },
    },
  },
}));

export default useStyles;
