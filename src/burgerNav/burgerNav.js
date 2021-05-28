import React from "react";
import s from './burgerNav.module.scss'
import {Link} from "react-scroll";
import {useState} from "react";

export function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link onClick={onBurgerButtonClick} to="">Main</Link>
                <Link onClick={onBurgerButtonClick} to="">Skills</Link>
                <Link onClick={onBurgerButtonClick} to="Works" smooth={true} duration={500} spy={true}>Projects</Link>
                <Link onClick={onBurgerButtonClick} to="">Contacts</Link>
            </div>
            <div onClick={onBurgerButtonClick} className={s.burgerBtn}/>
        </div>
    )
}