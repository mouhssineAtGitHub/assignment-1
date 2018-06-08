import React, { Component } from 'react';
import BlueDivWithButton from './BlueDivWithButton';

import headerImg from '../images/Header-img.png';
import lineImg from '../images/Border-BG.jpg';

const Header = function(props){
    return (
        <div className="header-container">
            <div className="part-one"><img src={headerImg} alt={props.alt}/></div>
            <div className="part-two">
                <span className='white-font'>POWERFULLY SIMPLE </span><span className='grey-font'>WITH A</span>
                <br />
                <span className='white-font'>SQUEEKY CLEAN <span className='grey-font'>DESIGN.</span></span>
                <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
                <button>LEARN MORE</button>
            </div>
            <div className="part-three">
                <BlueDivWithButton txt1='CREATE A' txt2='POWERFUL' txt3='SOLUTION NOW!' btnTitle='GET STARTED'/>
                <div className="line-img" style={{ backgroundImage: `url(${lineImg})` }}></div>
            </div> 
        </div>
    );
}

export default Header;

