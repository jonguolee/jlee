import React from 'react';
import './Button.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { HashLink as Link } from 'react-router-hash-link';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <AnchorLink href={onClick} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} type={type}>
                {children}
            </button>
        </AnchorLink>
    )
};