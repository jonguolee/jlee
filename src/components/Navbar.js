import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <AnchorLink href='#hero' className='navbar-logo' onClick={closeMobileMenu}>
                        JON. &nbsp;
            <i class="fas fa-feather-alt"></i>
                    </AnchorLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <AnchorLink href='#hero' className='nav-links' onClick={closeMobileMenu}>
                                Home
              </AnchorLink>
                        </li>
                        <li className='nav-item'>
                            <AnchorLink
                                href='#about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
              </AnchorLink>
                        </li>
                        <li className='nav-item'>
                            <AnchorLink
                                href='#projects'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Projects
              </AnchorLink>
                        </li>

                        <li>
                            <AnchorLink
                                href='#contact'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact Me
              </AnchorLink>
                        </li>
                    </ul>
                    {button && <AnchorLink href="#contact" className="btn btn--outline btn--medium">CONTACT ME</AnchorLink>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;