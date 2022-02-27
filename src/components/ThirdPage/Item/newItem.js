import React from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import clas from './item.module.css'

const NewItem = ({percent,description,text}) => {


    const percentage = 66;


    return (
        <div className={clas.container}>
            <CircularProgressbar
                value={percent}
                text={text}
                styles={buildStyles({
                    textColor: "red",
                    pathColor: "turquoise",
                    trailColor: "gold"
                })}
            />
            <div className={clas.tittle}>
                {description}
            </div>
            
        </div>
    );
};

export default NewItem;