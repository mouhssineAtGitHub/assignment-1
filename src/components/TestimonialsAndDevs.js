import React, { Component } from 'react';
import TitleWithSeperateLines from './TitleWithSeperateLines';
import Testimonial from './Testimonial';
import Developments from './Developments';

const TestimonialsAndDevs = function(props){
    return(
            <div className="main-container-testimonilsAndDevs">
                <div className="testimonial-line">
                    <TitleWithSeperateLines title= "TESTIMONIALS"/>
                </div>
                <div className="development-line">
                    <TitleWithSeperateLines title= "DEVELOPMENT"/>
                </div>
                <div className="testimonials-1">
                    <Testimonial testimonialTitle="JOHN SMITH" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                </div>
                <div className="testimonials-2">
                    <Testimonial testimonialTitle="JOHN SMITH" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                </div>
                <div className="testimonials-3">
                    <Testimonial testimonialTitle="JOHN SMITH" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                </div>
                <div className="testimonials-4">
                    <Testimonial testimonialTitle="JOHN SMITH" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                </div>
                <div className="developments">
                    <Developments />
                </div>
            </div>        
    );
}
export default TestimonialsAndDevs;