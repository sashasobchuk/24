import React from 'react';
import clas from './TopSide.module.css'
import img from  './../access/1.png'
const FifthPage = () => {
    return (<div>

        <div className={clas.topSide}>
            <img className={clas.MainImg} src={img} alt=""/>

            <div className={clas.middleSide}>
            <div className={clas.revie}>Відгуки</div>
                <h1 className={clas.revie2}>Що про нас говорять наші клієнти</h1>
                <div className={clas.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at
                    nunc venenatis varius ac ut nisl. Cras vulputate efficitur ligula, ac bibendum est placerat vel. Integer
                    sit amet lectus non enim maximus varius sed non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur ligula, ac bibendum
                    est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu.
                </div>
                <p className={clas.autor}>Елена Филонова, Львів</p>

                <div className={clas.buttonSide}>
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
        </div>

    );
};

export default FifthPage;