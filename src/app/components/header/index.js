import React from "react";
import useStyles from "./stylesheet";
import locales from '../../locales/index.js';
import { useCapp } from "../../context/cappcontext";
import { Buttons } from "../index.js";

export default function Header() {
    const { ChangeLanguage, ChangeTheme, MenuButton, AccountButton} = Buttons;
    const { theme, currentTheme, language, toggleMenu, translate ,isMenuOpen} = useCapp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath2 = `${process.env.PUBLIC_URL}/assets/icons/filmLogo.png`;
    return <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
            <img className={classes.img} src={iconPath2}></img>
            <h2>{translate.buy_ticket}</h2>
        </div>
        <div className={classes.MenuandUserContainer}>
            <div className={classes.userContainer}>
                <AccountButton/>
                <ChangeTheme />
                <ChangeLanguage />
            </div>
            <div className={classes.menu}>
                <MenuButton onClick={toggleMenu} />
            </div>
        </div>

    </div>
}