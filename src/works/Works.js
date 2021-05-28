import React from "react";
import s from './Works.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import Title from "../common/components/title/Title";
import todoImage from '../assets/image/1_VTKsiByHMcWDIxpFawp4fg.png'
import socialImage from '../assets/image/social-network-connections_1010-422.jpeg'
import cardsImage from '../assets/image/cards.png'
import Fade from "react-reveal/Fade";


export function Works() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    }
    return (
        <div id={"Works"} className={s.worksBlock}>
            <Fade right>
                <div className={`${styleContainer.container} ${s.worksContainer}`}>
                    <Title text={'Projects'}/>
                    <div className={s.works}>
                        <Work style={todolist} title={"Todolist App"}
                              description={"Todo web app with authorization and todo features.In this app you can add tasks, add lists of tasks and  remove them"}
                              link={"https://tatrom.github.io/Todolist/"}/>
                        <Work style={social} title={"Social network"}
                              description={"Simple social network with data saved on backend. This social network was built on react and redux. Try it!"}
                              link={"https://tatrom.github.io/my-social-network/"}/>
                        <Work style={cards} title={"Cards for learning"}
                              description={"App for learning with cards. Create you own packs of cards and learn with them! "}
                              link={"http://kibatensai.github.io/fridayfever"}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

