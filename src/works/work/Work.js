import React from "react";
import s from './Work.module.css'

export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.img}>
                <a href={'#'} className={s.imgButton}>Watch</a>
            </div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

    )
}