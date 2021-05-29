import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "../assets/icons/physics.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import gitIcon from "../assets/icons/git.png";
import htmlIcon from "../assets/icons/html.png";
import reduxIcon from "../assets/icons/icons8-redux-480.png";
import restIcon from "../assets/icons/icons8-rest-api-512.png";
import Fade from "react-reveal/Fade";

export function Skills() {
    const react = {
        color: 'blue',
        backgroundImage: `url(${reactIcon})`,
    }
    const css = {
        color: 'blue',
        backgroundImage: `url(${cssIcon})`,
    }

    const js = {
        color: 'blue',
        backgroundImage: `url(${jsIcon})`,
    }


    const git = {
        color: 'blue',
        backgroundImage: `url(${gitIcon})`,
    }
    const html = {
        color: 'blue',
        backgroundImage: `url(${htmlIcon})`,
    }
    const redux = {
        color: 'blue',
        backgroundImage: `url(${reduxIcon})`,
    }
    const rest = {
        color: 'blue',
        backgroundImage: `url(${restIcon})`,
    }
    return (
        <div className={s.skillBlock} id={"Skills"}>
            <Fade left>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title text={"Skills"}/>
                    <div className={s.skills}>
                        <Skill style={js} title={'JavaScript'}
                               description={"A high-level language that can be used to cover all the exigencies"}/>
                        <Skill style={css} title={'CSS'}
                               description={"A cornerstone technology for describing the presentation of a website"}/>
                        <Skill style={react} title={'React'}
                               description={"An up-to-date UI building technology with efficient solutions for almost any scenario"}/>
                        <Skill style={html} title={'html'}
                               description={"A classic utility to enhance the accessibility"}/>
                        <Skill style={git} title={'Git'}
                               description={"The speed, data integrity and support for development workflow"}/>
                        <Skill style={redux} title={'Redux'}
                               description={"A heplful state manager to handle business logic"}/>
                        <Skill style={rest} title={'RESTful'}
                               description={"A unified way to interact with the server"}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

