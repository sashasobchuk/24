import React from 'react';
import clas from './content.module.css'

const Content = () => {
    return (
        <div className={clas.contentComponent}>
            <div className={clas.tittleContainer}>
                <h1 className={clas.tittle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>

            </div>
            <div className={clas.textContainer}>
                <span className={clas.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum
                eros arcu, at aliquet tortor vestibulum ut. Quisque sed libero nec nulla pulvinar pharetra. Aliquam
                porttitor justo lorem, at rhoncus nulla condimentum vitae. Cras vitae aliquet quam.
                </span>
            </div>


            <div className={clas.btnPutHere}>
                <a href={'to here'}>
                    Залишити заявку
                </a>
            </div>
        </div>

    );
};

export default Content;