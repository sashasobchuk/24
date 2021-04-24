import React from 'react';
import clas from './content.module.css'

const Content = () => {
    return (
        <div  className={clas.contentComponent}>
        <h1 className={clas.tittle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
            <span className={clas.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum
                eros arcu, at aliquet tortor vestibulum ut. Quisque sed libero nec nulla pulvinar pharetra. Aliquam
                porttitor justo lorem, at rhoncus nulla condimentum vitae. Cras vitae aliquet quam.  </span>
            <div className={clas.btnPutHere}>
                <span>Залишити заявку</span></div>
        </div>

    );
};

export default Content;