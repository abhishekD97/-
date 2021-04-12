import React from "react";

function Projects(){
    return (
        <div className="mainProjectsContain px-5 py-5">
        <div className="my-5">
            <h1>My Projects</h1>
        </div>
        <div className="projectsContainer">
            <div onClick={ ()=> window.open("https://todolist-ec590.web.app/","_blank")} className="toDoList">
                <h4>To-Do-List</h4>
            </div>
            <div onClick={ ()=> window.open("https://form1-27ceb.web.app/","_blank")} className="customInputs">
                <h4>Custom-Inputs</h4>
            </div>
            <div onClick={ ()=> window.open("https://landing-page-res.web.app/","_blank")} className="RestaurantPage">
                <h4>restaurant-landing-page</h4>
            </div>
            <div onClick={ ()=> window.open("https://warm-springs-67469.herokuapp.com/","_blank")} className="Portfolio">
                <h4>Portfolio-Landing-Page</h4>
            </div>
        </div>
        </div>
    );
}

export default Projects;