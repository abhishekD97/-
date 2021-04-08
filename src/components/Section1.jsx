import React from "react";
import Typed from 'react-typed';

function Section1(){
    return (
        <div className="section1">
            <div className="data-intro">
            <h1 className="intro-line-1">full stack web developer</h1>
            <Typed
                    className="typed-text"
                    strings={["UI Developer", "React Developer", "Back-End Developer"]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                />
            </div>
        </div>
    );
}

export default Section1;