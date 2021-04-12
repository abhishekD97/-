import React from "react";
import pic from "../images/IMG_2036.jpg"

function About(){
    return (
        <div>
            <div className="contain px-5">
                <div className="imageSection">
                    <img className="profile_picture" src={pic}/>
                </div>
                <div className="about-me-info">
                    <h1 className="aboutmeHeader"> About Me </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi vel ex bibendum facilisis ut non dui. Pellentesque fermentum maximus tortor, nec pretium tellus tempor fringilla. Donec imperdiet enim quis justo consectetur, sed tincidunt arcu fringilla. Morbi eleifend dapibus porta. Proin ac sem et nunc ornare mattis. Nulla venenatis, erat ac dignissim aliquet, nisi elit sodales ante, eget malesuada diam leo sed est. Cras laoreet leo et purus vulputate, a commodo turpis suscipit. Maecenas egestas varius justo, vel accumsan turpis aliquam a. Quisque bibendum elit nec magna tempus elementum. Nullam bibendum quam eget nibh tempor blandit. Cras ultricies ut ligula at tristique. Sed ultrices.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;