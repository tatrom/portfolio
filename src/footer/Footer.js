import React from "react";
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h2>Roman Gadiev</h2>
            <div className={s.footerBlocks}>
                <div className={s.block}>
                    <h4>Follow</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Linkedin</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                </div>
                <div className={s.block}>
                    <h4>PRODUCT</h4>
                    <a href="#">Web Development</a>
                    <a href="#">Web Design</a>
                </div>
                <div className={s.block}>
                    <h4>Legal</h4>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
            <h5>Copyright Ⓒ 2021 Roman Gadiev. All rights Reserved</h5>
        </div>
    )
}

export default Footer;