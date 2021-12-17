import React from 'react';
import  clas from './Header.module.css'
import fb from './access/facebook 1.png'
import In from './access/Vector.png'
import inst from './access/instagram 1.png'

const Header = () => {
    return (
        <div className={clas.header}>
            <div className={clas.numbers}>
                <div  className={clas.firstNumber}>+38 (067) 467-37-67</div>
                <div  className={clas.secondNumber}>+38 (067) 467-37-67</div>
            </div>
             <span className={clas.icons}>
                 <a href=""> <img  src={fb} alt="facebookIcon" className={clas.fb}/></a>
                 <a href=""><img src={In} alt="LinkedInIcon" className={clas.In}/></a>
                 <a href=""><img src={inst} alt="instagramIcon" className={clas.inst}/></a>
             </span>
        </div>
    );
};

export default Header;