import React, {useEffect, useState} from 'react';
import clas from './item.module.css'

const Item = (props) => {

    /** radius = (width/2)-(strokewidth*2)*/
    let width = props.width
    let height = width
    let strokeWidth = props.border
    let radius = 52
    let cx = width/2
    let cy = height/2
    const circumFerenc = 2 * Math.PI * radius
    const [strokeDashoffset, set_strokeDashoffset] = useState(circumFerenc)
    useEffect(() => {
        let percent = props.percent
        set_strokeDashoffset(circumFerenc - percent / 100 * circumFerenc)
    })

    return (
        <div className={clas.Page}>
            {/** props.scale для фдексібл векрстки*/}
        <div className={clas.item} style={{width:props.width, transform:`scale(${props.scale})`}}>
                <div className={clas.linea}> </div>
            <span className={clas.description}>{props.description}</span>
            <div className={clas.text}>{props.text}</div>
            <svg className={clas.circle} width={width} height={height}>
                <circle
                    r={`${radius}`}
                    cx={cx}
                    cy={cy}
                    strokeWidth={strokeWidth}
                    style={{
                        strokeDasharray: ` ${circumFerenc} ${circumFerenc}`,
                        strokeDashoffset: `${strokeDashoffset}`,
                        stroke: `${props.color}`

                    }}
                />
            </svg>
            <svg className={clas.circle2} width={width} height={height}>
                <circle
                    r={`${radius}`}
                    cx={cx}
                    cy={cy}
                    strokeWidth={1}
                    style={{stroke: `white`}}
                />
            </svg>
        </div>
        </div>
    );
};

export default Item;