import "./demo.css";
import React from 'react';
 
// const colors = ["yellow"];

const Demo = () => {
    return (
        <div id="demo-wrapper">
            <div id="demo-nav-wrapper">
                <div id="demo-nav">
                    <h3>Demo Library</h3>
                    <hr></hr>
                    <ul>
                        <li className="main-li"><a href="#buttons">Buttons</a></li>
                        <li className="main-li"><a href="#colors">Colors</a>
                            <ul>
                                <li className="sub-li"><a href="#blue">Blue</a></li>
                                <li className="sub-li"><a href="#cool-grey">Cool Grey</a></li>
                                <li className="sub-li"><a href="#grey">Neutral Grey</a></li>
                                <li className="sub-li"><a href="#warm-grey">Warm Grey</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div id="demo">
                <h1>Welcome to my Demo Library.</h1>
                <h2 id="buttons">Buttons</h2>
                <div id="button-well-1">
                    <span><button className="button-1 button">Primary Button</button></span>
                    <span><button className="button-2 button">Secondary Button</button></span>
                    <span><button className="button-3 button">Tertiary Button</button></span>
                </div>
                <h2 id="colors">Colors</h2>
                <h4 id="blue">Blue</h4>
                <div id="color-well-1" className="color-well">
                    <div id="blue-1" className="color-swatch"></div>
                    <div id="blue-2" className="color-swatch"></div>
                    <div id="blue-3" className="color-swatch"></div>
                    <div id="blue-4" className="color-swatch"></div>
                    <div id="blue-5" className="color-swatch"></div>
                    <div id="blue-6" className="color-swatch"></div>
                    <div id="blue-7" className="color-swatch"></div>
                </div>
                <div id="color-well-1-labels" className="color-well-labels">
                    <div id="blue-1-label" className="color-swatch-label"><label>blue-1</label></div>
                    <div id="blue-2-label" className="color-swatch-label"><label>blue-2</label></div>
                    <div id="blue-3-label" className="color-swatch-label"><label>blue-3</label></div>
                    <div id="blue-4-label" className="color-swatch-label"><label>blue-4</label></div>
                    <div id="blue-5-label" className="color-swatch-label"><label>blue-5</label></div>
                    <div id="blue-6-label" className="color-swatch-label"><label>blue-6</label></div>
                    <div id="blue-7-label" className="color-swatch-label"><label>blue-7</label></div>
                </div>
                <h4 id="cool-grey">Cool Grey</h4>
                <div id="color-well-2" className="color-well">
                    <div id="cool-grey-1" className="color-swatch"></div>
                    <div id="cool-grey-2" className="color-swatch"></div>
                    <div id="cool-grey-3" className="color-swatch"></div>
                    <div id="cool-grey-4" className="color-swatch"></div>
                    <div id="cool-grey-5" className="color-swatch"></div>
                    <div id="cool-grey-6" className="color-swatch"></div>
                    <div id="cool-grey-7" className="color-swatch"></div>
                </div>
                <div id="color-well-2-labels" className="color-well-labels">
                    <div id="cool-grey-1-label" className="color-swatch-label"><label>c-grey-1</label></div>
                    <div id="cool-grey-2-label" className="color-swatch-label"><label>c-grey-2</label></div>
                    <div id="cool-grey-3-label" className="color-swatch-label"><label>c-grey-3</label></div>
                    <div id="cool-grey-4-label" className="color-swatch-label"><label>c-grey-4</label></div>
                    <div id="cool-grey-5-label" className="color-swatch-label"><label>c-grey-5</label></div>
                    <div id="cool-grey-6-label" className="color-swatch-label"><label>c-grey-6</label></div>
                    <div id="cool-grey-7-label" className="color-swatch-label"><label>c-grey-7</label></div>
                </div>
                <h4 id="grey">Neutral Grey</h4>
                <div id="color-well-3" className="color-well">
                    <div id="grey-1" className="color-swatch"></div>
                    <div id="grey-2" className="color-swatch"></div>
                    <div id="grey-3" className="color-swatch"></div>
                    <div id="grey-4" className="color-swatch"></div>
                    <div id="grey-5" className="color-swatch"></div>
                    <div id="grey-6" className="color-swatch"></div>
                    <div id="grey-7" className="color-swatch"></div>
                </div>
                <div id="color-well-3-labels" className="color-well-labels">
                    <div id="grey-1-label" className="color-swatch-label"><label>grey-1</label></div>
                    <div id="grey-2-label" className="color-swatch-label"><label>grey-2</label></div>
                    <div id="grey-3-label" className="color-swatch-label"><label>grey-3</label></div>
                    <div id="grey-4-label" className="color-swatch-label"><label>grey-4</label></div>
                    <div id="grey-5-label" className="color-swatch-label"><label>grey-5</label></div>
                    <div id="grey-6-label" className="color-swatch-label"><label>grey-6</label></div>
                    <div id="grey-7-label" className="color-swatch-label"><label>grey-7</label></div>
                </div>
                <h4 id="warm-grey">Warm Grey</h4>
                <div id="color-well-4" className="color-well">
                    <div id="warm-grey-1" className="color-swatch"></div>
                    <div id="warm-grey-2" className="color-swatch"></div>
                    <div id="warm-grey-3" className="color-swatch"></div>
                    <div id="warm-grey-4" className="color-swatch"></div>
                    <div id="warm-grey-5" className="color-swatch"></div>
                    <div id="warm-grey-6" className="color-swatch"></div>
                    <div id="warm-grey-7" className="color-swatch"></div>
                </div>
                <div id="color-well-4-labels" className="color-well-labels">
                    <div id="warm-grey-1-label" className="color-swatch-label"><label>w-grey-1</label></div>
                    <div id="warm-grey-2-label" className="color-swatch-label"><label>w-grey-2</label></div>
                    <div id="warm-grey-3-label" className="color-swatch-label"><label>w-grey-3</label></div>
                    <div id="warm-grey-4-label" className="color-swatch-label"><label>w-grey-4</label></div>
                    <div id="warm-grey-5-label" className="color-swatch-label"><label>w-grey-5</label></div>
                    <div id="warm-grey-6-label" className="color-swatch-label"><label>w-grey-6</label></div>
                    <div id="warm-grey-7-label" className="color-swatch-label"><label>w-grey-7</label></div>
                </div>
            </div>
        </div>
    );
};
 
export default Demo;
