// import React from 'react';

import Header from './components/header/header';
import Home from './components/home/home'
import About from './components/about/about';
import Project from './components/project/project';
import Contact from './components/contact/contact';

import './App.css';
import './Style.css'

// import logo from './logo.svg';
function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
