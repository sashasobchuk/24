import React from 'react';
import clas from './six.module.css'
const Six = () => {
    return (
        <div className={clas.six}>

            <div className={clas.main}>
                <h1>     Зв'яжіться з нами</h1>
                <span> Залиште номер телефону,
                    і ми зв'яжемося з вами на протязі 5 хвилин.</span>

                <div className={clas.inputsUp}>
                        <input type="text" className={clas.name} placeholder='name'/>
                        <input type="text" className={clas.mail}  placeholder='e-mail'/>
                </div>
                        <input type="text" className={clas.message}  placeholder='ваще повідомлення'/>
                <input type="button" className={clas.btn} value='надіслати'/>
            </div>


        </div>
    );
};

export default Six;