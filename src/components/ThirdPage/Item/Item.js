import React, {useEffect, useState} from 'react';
import clas from './item.module.css'

const Item = (props) => {
    const[state,setState]=useState(null)
    /** radius = (width/2)-(strokewidth*2)*/
    let width = props.width
    let height = width
    let strokeWidth = props.border
    let radius = 52
    let cx = width/2
    let cy = height/2
    const circumFerenc = 2 * Math.PI * radius
    const [strokeDashoffset, set_strokeDashoffset] = useState(circumFerenc)
    let percent = props.percent

    useEffect(() => {
        set_strokeDashoffset(circumFerenc - percent / 100 * circumFerenc)
        setState(null)
    },[circumFerenc, percent])

    return (
        <div className={clas.Page}>
            <div className={clas.item} style={{width:props.width}}>
                <div className={clas.linea}> </div>

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
            <div className={clas.description}>
                <span >{props.description}</span>
            </div>
        </div>
    );
};

export default Item;