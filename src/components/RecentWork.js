import React, { Component } from 'react';
import TitleWithSeperateLines from './TitleWithSeperateLines';
import Blog from './Blog';

const RecentWork = function(){
    return(
        <div className='main-container-recentWork'>
            <div className='lines'>
                <TitleWithSeperateLines title= "RECENT WORK"/>
            </div>
            
            <div className='blog-1'>
                <Blog blogTitle="Blog Title1" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
            </div>
            
            <div className='blog-2'>
                <Blog blogTitle="Blog Title" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
            </div>
            
            <div className='blog-3'>
                <Blog blogTitle="Blog Title" pargphTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
            </div>
        </div>    
    );
}
export default RecentWork;       