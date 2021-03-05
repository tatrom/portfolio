import React from "react";
import s from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";

export function Works() {
    return (
        <div className={s.workBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={"Todolist App"}
                          description={"In this app you can add tasks, add toDoLists and also you are able to remove them"}/>
                    <Work title={"Social network"}
                          description={"This social network was built on react and redux. Try it!"}/>
                </div>
            </div>
        </div>
    )
}

