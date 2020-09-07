import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/jsr-logo.svg';
import header from '../assets/hhh2.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '100px',
    padding: '15px',
    width: '100%',
    marginBottom: '0px',
    backgroundImage: `url(${header})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundImage: 'linear-gradient(to top,rgba(255, 255, 255, 0), #273e57)',
    boxShadow: ' 10px 10px 29px 8px rgba(0,0,0,0.46)',
  },
  container: {
    width: '70%',
    margin: '0 auto',
  },
  img: {
    width: '100%',
    height: '100px',
    margin: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  headerTitle: {
    padding: '10px',
  },
  imgContainer: {
    display: 'flex',
    margin: 'auto',
  },
}));
export default function Header() {
  const styles = useStyles();
  return <header className={styles.header}>{/* Header txt */}</header>;
}
