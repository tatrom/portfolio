import React from "react";
import s from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={s.skill}>
            <div style={props.style} className={s.icon}/>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}