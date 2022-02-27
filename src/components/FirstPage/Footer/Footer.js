import React from 'react';
import clas from './Footer.module.css'
import item1 from './acces/business 1.png'
import item2 from './acces/money-bag 1.png'
import item3 from './acces/business-report 1.png'
import item4 from './acces/fast 2.png'
import item5 from './acces/guarantee 1.png'
// import item1 from './acces/business 1.png'
const Footer = () => {
    return (
        <div className={clas.footer}>
            <div className={clas.item1}><span>Фіксований кошторис</span><img src={item1} alt="item1"/></div>
            <div className={clas.item2}><span>Працюємо без авансів</span><img src={item2} alt="item1"/></div>
            <div className={clas.item3}><span>Щотижнева звітність робочого процесу</span><img src={item3} alt="item1"/></div>
            <div className={clas.item4}><span>Здача роботи у зазначені терміни</span><img src={item4} alt="item1"/></div>
            <div className={clas.item5}><span>Гарантія на роботи</span><img src={item5} alt="item1"/></div>

        </div>
    );
};

export default Footer;