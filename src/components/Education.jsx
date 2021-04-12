import React from "react";

function Education(){
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Education</h1>
            </div>
            <div className="container experience-wrapper my-4">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014  -  2004</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas massa urna, nec eleifend metus.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016  -  2014</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas massa urna, nec eleifend metus.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020  -  2016</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas massa urna, nec eleifend metus.</p>
                    </div>
                </div>
                {/* - */}
            </div>
        </div>
    );
}

export default Education;