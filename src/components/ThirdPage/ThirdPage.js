import React from 'react';
import clas from './ThirdPage.module.css'
import Item from "./Item/Item";
// import img3 from './access/Subtract (3).png'
// import img6 from './access/Subtract.png'
// import img5 from './access/Subtract (1).png'
// import img4 from './access/Subtract (2).png'
let item1={

}
let scale=(document.body.clientWidth/1000)
console.log(scale)
const ThirdPage = () => {
    return (
        <div className={clas.ThirdPage}>
            <div className={clas.tittle}>
               <div className={clas.up}>
                   <div className={clas.etapW}>етапи роботи</div>
                   <div className={clas.howWorks}>Як ми працюємо?</div>

               </div>

                <div className={clas.etaps}>
                         <Item scale={scale}  percent={20} width={120} border={4} color={'#ffb800'} text={'1'} description={'Виїзд майстра на обєкт для замірів'} />
                         <Item scale={scale}  percent={35} width={120} border={4} color={'#ffb800'} text={'2'} description={'Складання кошторису згідно попередніх домовлень'} />
                         <Item scale={scale}  percent={50} width={120} border={4} color={'#ffb800'} text={'3'} description={'Підписання договору'} />
                         <Item scale={scale}  percent={60} width={120} border={4} color={'#ffb800'} text={'4'} description={'Закупівля матеріалу'} />
                         <Item scale={scale}  percent={85} width={120} border={4} color={'#ffb800'} text={'5'} description={'Вчасна здача проекту'} />
                         <Item scale={scale}  percent={100} width={120} border={4} color={'#ffb800'} text={'6'} description={'Щасливі замовники'} />
                </div>
                <div className={clas.linea}> 11</div>

            </div>

        </div>
    );
};

export default ThirdPage;