import React from "react";
import "../App.css";
import "./HeroSection.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Button.css';

function HeroSection() {
    return (
        <div id="hero" className="hero-container">
            <video src="/videos/video-3.mp4" autoPlay loop muted></video>
            <h1>I'm Jonathan.</h1>
            <p>...a Web Developer.</p>
            <div className="hero-btns">
                <AnchorLink
                    href='#about'
                    className="btn btn--outline btn--large"
                >
                    MY WORK
                    </AnchorLink>
            </div>
        </div>
    );
}

export default HeroSection;
