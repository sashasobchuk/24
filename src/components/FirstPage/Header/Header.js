import React from 'react';
import clas from './Header.module.css'
import fb from './access/facebook 1.png'
import In from './access/Vector.png'
import inst from './access/instagram 1.png'

const Header = () => {
    return (
        <div className={clas.header}>
            <div className={clas.numbers}>
                <div className={clas.firstNumber}><a href="tel:+38 (067) 000-00-00">+38 (067) 000-00-00</a></div>
                <div className={clas.secondNumber}><a href="tel:+38 (067) 000-00-00">+38 (067) 000-00-00</a></div>
            </div>
            <span className={clas.icons}>
                 <a target='_blank' href="https://www.facebook.com/" >
                     <img src={fb} alt="facebookIcon" className={clas.fb}/>
                 </a>
                 <a target='_blank' href="https://www.linkedin.com/in/oleksandr-sobchuk-a06085161/">
                     <img src={In} alt="LinkedInIcon" className={clas.In}/>
                 </a>
                 <a target='_blank' href="https://www.instagram.com/___0sasha0___/">
                     <img src={inst} alt="instagramIcon" className={clas.inst}/>
                 </a>
             </span>
        </div>
    );
};

export default Header;