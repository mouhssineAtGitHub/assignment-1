import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

const Category = function(props){
    return(
        <div className='categorie'>
            <i className={props.icon}></i>
            <div><span className="dark-span">{props.darkTxt}</span> <span className="light-span">{props.lightTxt}</span></div>
            <div>
                <p>
                    {props.mainTxt}
                </p>
            </div>
            <button>{props.btnTxt}</button>
            <div className="myTriangle-2"></div>
        </div>
    );
}
export default Category;