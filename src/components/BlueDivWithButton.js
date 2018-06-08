import React, { Component } from 'react';

const BlueDivWithButton = function(props){

    return(
        <div className="centered-div">
            <p>{props.txt1} <span>{props.txt2}</span> {props.txt3}</p> 
            <button>{props.btnTitle}</button>
            <div className="myTriangle-1"></div>
        </div>
    );
}
export default BlueDivWithButton;
