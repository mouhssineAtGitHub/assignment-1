import React, { Component } from 'react';
import lineImg from '../images/Border-BG.jpg';

const TitleWithSeperateLines = function(props){
    return(
        <div className='title-with-lines'>
            <div className="line-img-1" ></div>
            <div className='title-between-lines'>{props.title}</div>
            <div className="line-img-1" ></div>
        </div>
    );
}
export default TitleWithSeperateLines;