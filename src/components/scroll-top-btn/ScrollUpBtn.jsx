import React from "react";
import './scroll-top-btn.scss';

import ScrollTop from "react-scrolltop-button";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpBtn = () => {
    return (
        <div>
            <ScrollTop
              text={<FaArrowUp className="btnIcon"/>}
                distance={100}
                breakpoint={768}
                style={{ backgroundColor: "#2c2c6c" }}
                className="scrollTopBtn"
                speed={500}
                target={75}
               
            />
        </div>
    );
};

export default ScrollUpBtn;
