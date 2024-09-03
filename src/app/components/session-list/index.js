import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";
import { Buttons, Genre } from "../index"
import { SessionButton } from "../buttons";

export default function SessionList() {
    const { theme, currentTheme } = useCapp();
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    const classes = useStyles({ theme: currentTheme });
    const { SessionButton } = Buttons;
    const handleClick = () => {
        alert("deneme");
    };

    return (
        <div className={classes.filmContainer}>
            <h2 className={classes.title}> Salon </h2>
            <SessionButton Text={"19:00"} onClick={handleClick} />
        </div>
    );

}