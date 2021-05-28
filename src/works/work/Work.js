import React from "react";
import s from './Work.module.scss'

export function Work(props) {
    return (
        <div className={s.work}>
            <div style={props.style} className={s.img}>
                <a href={props.link} className={s.imgButton}>Watch</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>

    )
}