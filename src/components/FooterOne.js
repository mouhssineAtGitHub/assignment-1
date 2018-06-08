import React, { Component } from 'react';

const FooterOne = function(props){
    return(
        <div className="wrapper">
        
            <div className='footer-container-one'>
                <div className='about'>
                    <h3>ABOUT US</h3>
                    <p>Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's</p>
                    <span className="grey-span">123 Streat Name</span><br/>
                    <span className="grey-span">Road Name</span><br/>
                    <span className="grey-span">London</span><br/>
                    <span className="grey-span">+ 123 6798 567</span>
                </div>

                <div className='tweets'>
                    <h3>LATEST TWEETS</h3>
                    <p>Simply <span className="white-span">London</span> of the printing and typesetting industry. 
                        Lorem <span className="white-span">London</span> has been the industry's</p>
                    <p>Simply <span className="white-span">London</span>  text of the printing and industry. 
                        Lorem Ipsum has <span className="white-span">London</span> the industry's.</p>
                </div>

                <div className='posts'>
                    <h3>LATEST POST</h3>
                    <span className="grey-span">Simply dummy text of the printing.</span>
                    <div className="underlined"></div> 
                    <span className="blue-span">123 Streat NameSimply dummy text of.</span>
                    <div className="underlined"></div>
                    <span className="grey-span">Simply dummy text of the printing and.</span>
                    <div className="underlined"></div>
                    <span className="grey-span">Simply dummy text of the printing.</span>
                </div>

                <div className='flicker'>
                    <h3>FLICKER</h3>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                    <div className="boxed"></div>
                </div>
            </div>

        
        </div>
    );
}

export default FooterOne; 