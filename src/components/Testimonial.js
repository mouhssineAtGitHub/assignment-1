import React, { Component } from 'react';
import myImg from '../images/img-placeholder.png';

const Testimonial = function(props){
    return(
        <div className='blog'>
                <h3>{props.testimonialTitle}</h3>
                <p>
                    {props.pargphTxt}
                </p>
            <div className="myTriangle-2"></div>
        </div>
    );
}
export default Testimonial;