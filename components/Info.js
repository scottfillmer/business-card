import React from "react";
// import image from "../images/profile.jpg"

export default function Info() {
    return (
        <div>
            <div className="header">
                <img className="profile" src="./images/profile.jpg" alt="" />
                <h1 className="header--name">Scott Fillmer</h1>
                <h3 className="header--title">Frontend Developer</h3>
                <p className="header--url">scottfillmer.com</p>
            </div>
            <div className="header--button">
                <button className="email"> <img src="./images/Mail.png"/>Email</button>
        <button className="linkedin"><img src="./images/linkedin.png"/>LinkedIn</button>
            </div>
        </div>
    ) 
}