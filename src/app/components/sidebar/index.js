import React from 'react';
import { useCapp } from '../../context/cappcontext';
import useStyles from './stylesheet';
import { Buttons } from '../index';

export default function SideBar() {
    const { MenuButton, ChangeTheme, ChangeLanguage, AccountButton } = Buttons;
    const { currentTheme, isMenuOpen, translate, theme, language } = useCapp();
    const classes = useStyles({ theme: currentTheme });
    return (
        <div className={`${classes.blur} ${isMenuOpen === "open" ? 'open' : 'closed'}`}>
            <div className={classes.menu}>
                <div className={classes.menuButton}><MenuButton />
                    <AccountButton/>
                </div>
                <div className={classes.buttonContainer}>
                    <span className={classes.text}>Menu{translate.menu}</span>
                    <div className={classes.buttonText}>
                        <ChangeTheme />
                        <span>{translate.change_theme}</span>
                    </div>
                    <div className={classes.buttonText}>
                        <ChangeLanguage />
                        <span>{translate.change_language}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}