import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Particles from "react-particles-js";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

export function Main() {

    return (
        <div className={s.mainBlock} id={'Main'}>
            <Particles className={s.particles} params={particlesOptions}/>
            <Fade right>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <h1>Roman Gadiev</h1>
                        <ReactTypingEffect text={"Frontend Developer"}/>
                    </div>
                    <Tilt className="Tilt" options={{max: 15, speed: 200}}>
                        <div className={s.image}>
                            <a href="https://drive.google.com/file/d/1t4v4WpUklgBawM2oetYHxBFCv3xhq0E2/view"
                               target="_blank" rel="noreferrer">

                                <div className={s.photo}/>
                                <label>Click to check my CV</label>
                            </a>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    )
}

