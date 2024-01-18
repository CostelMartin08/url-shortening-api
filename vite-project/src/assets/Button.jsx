import React, { useState, useEffect } from 'react';
import './icon.css';

const handleResize = (props, buttonStyles, setButtonStyles) => {
    if (window.innerWidth <= 992) {
        setButtonStyles({
            ...buttonStyles,
            width: '200px',
            height: '60px',
            borderRadius: '30px',
            fontWeight: '700',
            fontSize: '20px',
            color: 'white'

        });
    } else {

        setButtonStyles({
            backgroundColor: props.color,
            border: '0',
            width: props.width,
            height: props.height,
            borderRadius: props.border,
            color: props.colorL
        });
    }
};

const Button = (props) => {
    const [buttonStyles, setButtonStyles] = useState({
        backgroundColor: props.color,
        border: '0',
        width: props.width,
        height: props.height,
        borderRadius: props.border,
        color: props.colorL
    });

    useEffect(() => {

        handleResize(props, buttonStyles, setButtonStyles);


        const handleResizeEvent = () => {
            handleResize(props, buttonStyles, setButtonStyles);
        };

        window.addEventListener('resize', handleResizeEvent);

        return () => {
            window.removeEventListener('resize', handleResizeEvent);
        };
    }, []);

    return (
        <>
            <button className='btn-foo' style={buttonStyles}>{props.text}</button>
        </>
    );
};

export default Button;





