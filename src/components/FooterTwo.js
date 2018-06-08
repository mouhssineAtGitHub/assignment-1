import React, {Component} from 'react';

const FooterTwo = function(props){
    return(
        <div className="footer-two">
            <span>COPYRIGHT &copy;2018-2019, iNTGRIFY OY. ALL RIGHTS RESERVED.</span>
            <i className="fa fa-facebook tooltips">
                <span className="toolTipDisplayer">Facebook<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-twitter tooltips">
                <span className="toolTipDisplayer">Twitter<div className="myTriangle-3"></div></span>
            </i>

            <i className="fa fa-google tooltips">
                <span className="toolTipDisplayer">Google<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-linkedin tooltips">
                <span className="toolTipDisplayer">Linkedin<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-vimeo tooltips">
                <span className="toolTipDisplayer">Vimeo<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-instagram tooltips">
                <span className="toolTipDisplayer">Instagram<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-pinterest tooltips">
                <span className="toolTipDisplayer">Pinterest<div className="myTriangle-3"></div></span>
            </i>
            <i className="fa fa-arrow-up special">
            </i>
        </div>
    );
}
export default FooterTwo;