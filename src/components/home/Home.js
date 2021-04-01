import React from "react";
import "./home.css";


const Home = ()=> {
    return (

        <div className="main-container">
            <div className="left-container">
                <p className="heading">Covid Tracker </p>
                <p className="sub-heading">Track COVID-19 local and global coronavirus cases with active, recoveries and death rate on the map, with daily news.
                A detailed country map shows the extent of the coronavirus outbreak, with graphs.</p>
                <button  className="container-btn">Learn More</button>
            
            </div>
            <div className="right-container">
                <img className="right-container-image" src="https://accesstonutrition.org/app/uploads/2020/07/image001-e1594885764570-1024x829.png" alt="homepng"/>
            </div>


        </div>
    )

};

export default Home;