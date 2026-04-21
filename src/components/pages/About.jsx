import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="about-page">
            <h1>O nama</h1>
            
            <nav>
                <Link to="app">O aplikaciji</Link>
                <Link to="author">O autoru</Link>
            </nav>
            
            <div className="outlet-box">
                <Outlet/>
            </div>
        </div>
    )
}

export default About;