import React from 'react';
import clas from './ForthPage.module.css'
import rightImg from './access/IMG-519014695cc4d76f64d23f95fcac3dc2-V 1.png'

import foto1 from './access/1.png'
import foto2 from './access/2png.png'
import foto3 from './access/3.png'
import foto5 from './access/5.png'


const ForthPage = () => {
    return (
        <div className={clas.fullPage}>
            <div className={clas.tittle}>
                <div className={clas.portfolio}>
                    портфоліо
                </div>
                <div className={clas.works}>Наші роботи</div>

            </div>
            <div className={clas.bottomSide}>
                <div className={clas.leftSite}>
                    <img className={clas.leftFonImage} src={foto5} alt=""/>
                    <div className={clas.content}>

                        <h1>Назва проекта</h1>
                        <span className={clas.main}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum eros arcu, at aliquet
                    tortor vestibulum ut. Quisque sed libero nec nulla pulvinar pharetra. Aliquam porttitor justo lorem,
                    at rhoncus nulla condimentum vitae. Cras vitae aliquet quam. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Phasellus id quam nulla. </span>
                        <div className={clas.firstLine}><span className={clas.time}>Термін ремонта:</span> <span
                            className={clas.timeIs}> 21 день</span></div>
                        <div className={clas.secondLine}><span className={clas.area}>Площа:</span> <span
                            className={clas.areaIs}> 81 м <sup>2</sup></span></div>
                    </div>
                    <div className={clas.leftImages}>
                        <div><img src={foto1} alt="foto"/></div>
                        <div><img src={foto2} alt="foto"/></div>
                        <div><img src={foto3} alt="foto"/></div>
                    </div>

                </div>

                <div className={clas.rightSite}>
                    <img className={clas.rightImg} src={rightImg} alt="rightImg"/>

                    <div className={clas.rihthbottom}>
                        <div className={clas.toRight}></div>
                        <div className={clas.toLeft}></div>
                        <div className={clas.divs}>
                            <div>
                                <div className={clas.firstChil}></div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ForthPage;