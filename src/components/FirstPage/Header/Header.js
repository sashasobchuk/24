import React from 'react';
import  clas from './Header.module.css'
import fb from './access/facebook 1.png'
import In from './access/Vector.png'
import inst from './access/instagram 1.png'

const Header = () => {
    return (
        <div className={clas.footer}>
            <div  className={clas.firstNumber}>+38 (067) 467-37-67</div>
            <div  className={clas.secondNumber}>+38 (067) 467-37-67</div>
             <div className={clas.icons}>
                 <img src={fb} alt="facebookIcon" className={clas.fb}/>
                 <img src={In} alt="LinkedInIcon" className={clas.In}/>
                 <img src={inst} alt="instagramIcon" className={clas.inst}/>
             </div>
        </div>
    );
};

export default Header;