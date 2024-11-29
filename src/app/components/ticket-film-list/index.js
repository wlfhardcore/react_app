import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";
import { Buttons, Genre } from "../index"

export default function TicketFilmList() {
    const { theme, currentTheme } = useCapp();
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    const classes = useStyles({ theme: currentTheme });
    const imagePath = "/assets/banners/image4.jpg";
    const { FilmButton } = Buttons;
    const handleClick = () => {
        alert("deneme");
    };
    //const [selectedButtonId, setSelectedButtonId] = useState(null);

	//const handleButtonClick = (id) => {
	//	setSelectedButtonId(id); 
	//  };
	

    return (
        <div className={classes.filmContainer}>
            <h2 className={classes.title}> Filmler </h2>

            <div className={classes.filmbuttonsdiv}>
                <FilmButton Text={"beyaz"} imagePath={imagePath} />
                <FilmButton Text={"yesil"} imagePath={imagePath} /> 
            </div>


        </div>
    );

}