import React from "react";
import "./header.scss";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <h5> Hello I am</h5>
                <h1>Vasyl Yatsyshyn</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="photo">
                  <img src='/images/me.png' alt="person photo" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
