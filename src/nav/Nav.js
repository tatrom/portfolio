import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export function Nav() {
    return (
        <div className={s.nav}>
            <Link to="Main" className={s.nav_link}>Main</Link>
            <Link to="Skills" className={s.nav_link}>Skills</Link>
            <Link to="Works" smooth={true} duration={500} spy={true} className={s.nav_link}>Projects</Link>
            <Link to="Contacts" className={s.nav_link}>Contacts</Link>
        </div>
    )
}