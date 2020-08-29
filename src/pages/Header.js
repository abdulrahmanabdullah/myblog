import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/jsr-logo.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 'auto',
    padding: '15px',
    maxWidth: '100%',
    marginBottom: '30px',
    backgroundImage: 'linear-gradient(to top,rgba(255, 255, 255, 0), #273e57)',
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
  return (
    <div className={styles.header}>
      <Grid container spacing={8}>
        <Grid item>
          {/* Logo */}
          <Link to='/'>
            <div className={styles.imgContainer}>
              <img
                src={logo}
                className={styles.img}
                alt='Javascript and React'
              />
            </div>
          </Link>
        </Grid>
      </Grid>
      {/* Header txt */}
    </div>
  );
}
