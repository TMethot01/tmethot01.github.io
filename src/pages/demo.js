import "./demo.css";
import React from 'react';
 
const Demo = () => {
    return (
        <div id="demo-wrapper">
            <div id="demo">
                <h1>Welcome to my Demo Library.</h1>
                <div id="button-well-1">
                    <span><button className="button-1">Button 1</button></span>
                    <span><button className="button-2">Button 2</button></span>
                    <span><button className="button-3">Button 3</button></span>
                </div>
            </div>
        </div>
    );
};
 
export default Demo;
