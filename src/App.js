import React, { Component } from 'react';
import Header from './components/Header';
import MainCategories from './components/MainCategories';
import RecentWork from './components/RecentWork';
import BlueDivWithButton from './components/BlueDivWithButton';
import TestimonialsAndDevs from './components/TestimonialsAndDevs';
import FooterOne from './components/FooterOne';
import FooterTwo from './components/FooterTwo';

import './App.css';

class App extends Component {
  render() {
    return (  
      <div>
        <Header alt='header Image' />
        <MainCategories />  
        <RecentWork />
        <TestimonialsAndDevs /> 
        <BlueDivWithButton txt1='CREATE A' txt2='POWERFUL' txt3='SOLUTION NOW!' btnTitle='CONTACT US'/>
        <FooterOne />
        <FooterTwo />
      </div>   
        
    );
  }
}

export default App;
