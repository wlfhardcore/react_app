import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";
import { Buttons, Genre } from "../index"

export default function TicketFilmList() {
    const { theme, currentTheme } = useCapp();
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    const classes = useStyles({ theme: currentTheme });
    const imagePath = "/assets/banners/image4.jpg";
    const {FilmButton} = Buttons;
    const handleClick = () => {
        alert("deneme");
    };

    return (
        <div className={classes.filmContainer}>
            <h2 className={classes.title}> Filmler </h2>
                <FilmButton Text={"aasda"} onClick={handleClick} imagePath={imagePath}/>
        </div>
    );

}