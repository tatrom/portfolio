import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={s.skillBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skils</h2>
                <div className={s.skills}>
                <Skill title={'js'} description={"Hello there is a description for js"}/>
                <Skill title={'css'} description={"Hello there is a description for css"}/>
                <Skill title={'react'} description={"Hello there is a description for react"}/>
                </div>
            </div>
        </div>
    )
}

