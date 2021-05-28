import React from "react";
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h4>Roman Gadiev</h4>
            <div className={s.block}>
                <a href="https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%B3%D0%B0%D0%B4%D0%B8%D0%B5%D0%B2-a8755a169/">Linkedin</a>
                <a href="https://t.me/rgadiev">Telegram</a>
                <a href="https://github.com/tatrom">Github</a>
            </div>
            <h5>© 2021 All Rights Reserved</h5>
        </div>
    )
}

export default Footer;