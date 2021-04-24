import React from 'react';
import clas from './Seven.module.css'
import instagram from  './accets/instagram 1.png'
import facebook from  './accets/facebook 1.png'
import linkedin from  './accets/linkedin 1.png'

const Seven = () => {
    return (
        <div className={clas.Seven}>
            <div className={clas.main}>
                <div className={clas.firstTable}>
                    <div className={clas.Logo}>LOGO</div>
                    <span className={clas.description}>Duis aute irure dolor in
                    reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.  </span>
                </div>


                <div className={clas.secondTable}>
                    <div>Про нас</div>
                    <div>Портфоліо</div>
                    <div>Етапи роботи</div>
                </div>
                <div className={clas.thidtTable}>
                    <div>
                        УКРАЇНА, М.ЛЬВІВ,
                        ВУЛ. Зелена 230
                    </div>
                    <div>
                        (097)857-70-47
                    </div>
                </div>


            </div>
            <div className={clas.fotos}>
                <a href=''>
                    <img src={instagram} alt=""/>
                </a>
                <a href=''>
                    <img src={facebook} alt=""/>
                </a>
                <a href=''>
                    <img src={linkedin} alt=""/>
                </a>
            </div>

        </div>
    );
};

export default Seven;