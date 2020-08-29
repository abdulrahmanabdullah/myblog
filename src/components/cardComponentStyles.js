import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '350px',
    height: '200px',
    marginBottom: '10px',
    position: 'relative',
    boxShadow: '10px 10px 29px 8px rgba(0, 0, 0, 0.46)',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  cCard: {
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
  },
  cardDate: {
    height: '100%',
    backgroundImage:
      'linear-gradient(to left, #3e432e, #4b4d4a, rgba(64, 66, 65, 0.5))',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    borderRight: '8px solid rgba(62, 67, 46, 0.4)',
    padding: '0',
    margin: '0',
    [theme.breakpoints.down('sm')]: {},
  },
  cardDateContent: {
    padding: '0',
    margin: '0',
    lineHeight: '200%',
    textAlign: 'center',
  },
  cardDateContentDate: {
    writingMode: 'vertical-rl',
    fontSize: '14px',
    textOrientation: 'mixed',
    color: '#fff',
    padding: '0',
    margin: '0 auto',
    height: '200px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  cardDateContentEst: {
    color: '#a7d129',
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    padding: '0px',
    fontSize: '16px',
    margin: '0',
    height: '200px',
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  cardDateContentD: {
    color: '#a7d129',
  },
  cardBody: {
    position: 'relative',
    width: 'auto',
    padding: '5px',
    textAlign: 'left',
  },
  cardBodyBorder: {
    position: 'absolute',
    padding: '0',
    marginLeft: '22px',
    height: '48px',
    top: '12%',
    border: '2px solid #616F39',
  },
  cardBodyTitle: {
    color: '#fff',
    fontSize: '24px',
    [theme.breakpoints.down('ms')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  cardBodyAuthor: {
    color: 'gray',
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  cCardIcons: {
    margin: '0',
    position: 'absolute',
    width: '50px',
    height: '100px',
    top: '40%',
    left: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: '2px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > svg': {
      color: '#616f39',
    },
  },
}));
