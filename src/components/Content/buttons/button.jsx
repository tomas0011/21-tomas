import React from "react";
import styleB from './Button.module.css';

const Button = ({ title, link}) => {
    return (
        <div className={styleB.buttons}>
            <a href={link}>
                <button
                    className={styleB.btnHover}
                    
                >{title}
                </button>
            </a>
        </div>
    );
};

export default Button;