import React, { Component } from 'react';
import myImg from '../images/img-placeholder.png';

const Blog = function(props){
    return(
        <div className='blog'>
            <img src={myImg} alt="alt picture"/>
                <h3>{props.blogTitle}</h3>
                <p>
                    {props.pargphTxt}
                </p>
            <div className="myTriangle-2"></div>
        </div>
    );
}
export default Blog;