import React, {Component} from 'react';

const Developments = function(props){
    return(
        <div>
            <div className="tab">
                <button className="tablinks active">Design</button>
                <button className="tablinks">Production</button>
            </div>

            <div className="tabcontent blog">
                <h3>Design</h3>
                <p>
                    Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p>
                    Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
        </div>
    );
}
export default Developments;