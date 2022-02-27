import React, {useEffect, useState} from 'react';
import clas from './ThirdPage.module.css'
import Item from "./Item/Item";
// import img3 from './access/Subtract (3).png'
// import img6 from './access/Subtract.png'
// import img5 from './access/Subtract (1).png'
// import img4 from './access/Subtract (2).png'
import {CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import NewItem from "./Item/newItem";


const ThirdPage = () => {
    const [scale,setScale]=useState(document.body.clientWidth/1000)

    useEffect(()=>{
        setScale(
            document.body.clientWidth/1000
        )
    },[])
    // console.log(scale)
    let percentage = 20
    return (
        <div className={clas.ThirdPage}>
            <div className={clas.tittle}>
               <div className={clas.up}>
                   <div className={clas.etapW}>етапи роботи</div>
                   <div className={clas.howWorks}>Як ми працюємо?</div>
               </div>
            </div>

                <div className={clas.etaps}>
                    <NewItem  percent={20} color={'red'} text={'1'} description={'Виїзд майстра на обєкт для замірів'}/>
                    <NewItem  percent={35} color={'red'} text={'2'} description={'Складання кошторису згідно попередніх домовлень'}/>
                    <NewItem  percent={50} color={'red'}  text={'3'} description={'Підписання договору'}/>
                    <NewItem  percent={60} color={'red'} text={'4'} description={'Закупівля матеріалу'}/>
                    <NewItem  percent={85} color={'red'} text={'5'} description={'Вчасна здача проекту'} />
                    <NewItem  percent={100} color={'red'} text={'6'} description={'Щасливі замовники'} />

            </div>

        </div>
    );
};

export default ThirdPage;