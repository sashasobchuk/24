import React from 'react';
import clas from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        < div className={clas.navBarPage}>
            <div className={clas.logo}>LOGO</div>
            <div className={clas.navBar}>
                <a >  Про нас</a>
                <a >Відгуки </a>
                <a >  Ціни</a>
                <a >Наші роботи </a>
                <a > Контакти</a>
            </div>
            <div className={clas.rightLogo}>  Замовити дзвінок </div>

        </div>
    );
};

export default Navbar;