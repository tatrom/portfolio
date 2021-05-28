import React from "react";
import s from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../burgerNav/burgerNav";

export function Header() {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    )
}