import React from "react";
import "./Main.css";
import profileImage from "./profile.png";

const Main = ({ username, onLogout }) => {
    return (
        <div>
            <h1>Profile</h1>
            <div className="main-container">
                <center><img src={profileImage} alt="Avatar" className="profile" /></center>
                <p className="username">Welcome, {username}!</p>
            </div>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Main;

