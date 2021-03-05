import React from "react";
import s from './needJob.module.css'
import styleContainer from '../common/styles/Container.module.css'
import styleButton from '../common/styles/Button.module.css'

export const NeedJob = () => {
    return (
        <div className={s.needJobBlock}>
            <div className={`${styleContainer.container} ${s.needJobContainer}`}>
                <form className={s.form} action="post">
                    <div>Considering the option of remote work</div>
                    <button className={`${styleButton.button} ${s.needJobButton}`}>Hire me</button>
                </form>
            </div>
        </div>
    )
}