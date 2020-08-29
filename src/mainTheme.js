import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {},
  //   write some txt features here
  typography: {
    color: 'white',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  //   Responsive typography
  overrides: {},
  //   direction goes here
  direction: 'rtl',
});

// Article Title
theme.typography.h1 = {
  fontSize: '6rem',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 1.55,
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.25rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2.25rem',
  },
};

// Articles Titles
theme.typography.h3 = {
  fontSize: '24px',
  fontWeight: '600',
  color: 'white',
  lineHeight: 1.55,
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
};

//Articles subtitle
theme.typography.h4 = {
  fontSize: '18px',
  fontWeight: '400',
  color: 'white',
  lineHeight: 1.55,
};
//Articles subtitle
theme.typography.h6 = {
  fontSize: '16px',
  fontWeight: '400',
  color: '#888181',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '14px',
  },
};
// Website name
theme.typography.h2 = {
  fontSize: '3.33rem',
  color: 'white',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: '53px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.25rem',
  },
};

// Article component date and estimate read
theme.typography.body1 = {
  fontSize: '1.5rem',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '14px',
  },
};

theme.typography.body2 = {
  fontSize: '20px',
  color: 'white',
  lineHeight: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.89rem',
  },
};

export default theme;
