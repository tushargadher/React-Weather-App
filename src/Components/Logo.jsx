import React from "react";
import logoSrc from "../assets/logo.png";
const Logo = () => {
    return (
        <>
            <div className="logoName">
                <img src={logoSrc} height="100%" id="img" />
                <span>Excel Weather</span>
            </div>
        </>
    )
}
export default Logo;