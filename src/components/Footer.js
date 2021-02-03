import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            JON. &nbsp; <i className="fas fa-feather-alt"></i>
                        </Link>
                    </div>
                    <small className="website-rights">{year}</small>
                    <div className="social-icons">

                        <Link className="social-icon-link linkedin"
                            to="//linkedin.com/in/jonathan-lee-14374414a/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
