import React from 'react';
import clas from './cecondPage.module.css'
import leftImg from './access/charles-deluvio-c2thq3SXJiA-unsplash 1.png'

const SecondPage = () => {
    return (
        <div className={clas.secondPage}>
            <div className={clas.left}>
                <img className={clas.leftImg} src={leftImg} alt=""/>
                <div className={clas.advert}><span><span> <sub>10</sub>+ </span><br/> років досвіду</span></div>
            </div>
            <div className={clas.right}>
                <div>
                    <span className={clas.abouteUs}>Про нас  </span>
                    <h1 className={clas.whoWe}>Хто ми такі?</h1>
                </div>

                <div className={clas.contentContainer}>

                <span className={clas.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum eros arcu,
                        at aliquet tortor vestibulum ut. Quisque sed libero nec nulla pulvinar pharetra. Aliquam
                        porttitor justo lorem, at rhoncus nulla condimentum vitae. Cras vitae aliquet quam. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus id quam
                        nulla. Proin consequat mauris augue, id suscipit risus mattis non. Sed a vulputate diam.a
                        Mauris eget urna quis nisl lacinia
                        convallis. Mauris ut urna sed sem egestas hendrerit at vel quam. Vestibulum maximus
                        velit dui.
                </span>
                </div>


            </div>

        </div>
    );
};

export default SecondPage;