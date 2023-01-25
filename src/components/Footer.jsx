import React from "react";

function Footer(){

    const curryear = new Date().getFullYear();

    return (
        <footer>
            <p>CopyRight ⓒ{curryear}</p>
        </footer>
    )
}
export default Footer;