import React, {useCallback, useEffect, useState} from 'react';
import clas from './navbar.module.css'
import {NavLink} from "react-router-dom";
import  burgerMenu from '../../../accets/images/burgerMenu.png'

const Navbar = () => {
    const [bigMenu,setBigMenu]=useState(false)

    const changeMenu = ()=>{
        setBigMenu(!bigMenu)
    }
    const hideMenu=()=>{
        setBigMenu(false)
    }
    const openMenu =useCallback( (e) => {
        e.stopPropagation()
        setBigMenu(true)
    },[bigMenu])

    useEffect(()=>{
        window.addEventListener('click',e=>{
            hideMenu()
        })
        return ()=>{
            window.removeEventListener('click',window)
        }
    },[])


    return (
        <div onClick={e=>hideMenu(e)} className={clas.navBarPage}>
            <div className={clas.logo}>LOGO</div>
            <div  className={`${clas.navBar} ${bigMenu ? clas.active : clas.noActive}`}>
                <a >  Про нас</a>
                <a >Відгуки </a>
                <a >  Ціни</a>
                <a >Наші роботи </a>
                <a > Контакти</a>
                <a href="">Замовити дзвінок</a>
            </div>
            <div onClick={openMenu}  className={`${clas.burgerMenu} ${bigMenu ? clas.noActive : clas.active}`} >
                <img  src={burgerMenu} />
            </div>
        </div>
    );
};

export default Navbar;