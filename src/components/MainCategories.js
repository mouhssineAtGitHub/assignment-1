import React, { Component } from 'react';
import Category from './Category';

const MainCategories = function(){

    return(
        <div className='main-container-categories'>
            <div className='cat-1'>
                <Category icon="fa fa-mobile" darkTxt="SUPERBLY" lightTxt="RESPONSIVE"
                    mainTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    btnTxt="READ MORE"
                />
            </div>
            <div className='cat-2'>
                <Category icon="fa fa-desktop" darkTxt="SUPERBLY" lightTxt="RESPONSIVE"
                    mainTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    btnTxt="READ MORE"
                />
            </div>
            <div className='cat-3'>
                <Category icon="fa fa-laptop" darkTxt="SUPERBLY" lightTxt="RESPONSIVE"
                    mainTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    btnTxt="READ MORE"
                />
            </div>
            <div className='cat-4'>
                <Category icon="fa fa-recycle" darkTxt="SUPERBLY" lightTxt="RESPONSIVE"
                    mainTxt="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    btnTxt="READ MORE"
                 />
            </div>
        </div>
    );
}
export default MainCategories;