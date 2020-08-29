import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App-module.css';
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
// Components
import Header from './pages/Header';
import Home from './pages/Home';
import PostPage from './pages/post/PostPage';
import theme from './mainTheme';

// SET direction rtl
const App = () => {
  const [dir, setDir] = useState('ar');
  document.body.dir = dir === 'en' ? 'ltr' : 'rtl';
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <div>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            {/* <Header /> */}
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/blog/:postId' exact element={<PostPage />} />
            </Routes>
          </Router>
          {/* <Article /> */}
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
