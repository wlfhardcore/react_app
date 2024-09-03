import React from "react";
import { useCapp } from "../../../context/cappcontext";
import useStyles from "./stylesheet";

export default function FilmButton({onClick,Text,imagePath}){
    const{theme,currentTheme} = useCapp();
	const classes = useStyles({ theme: currentTheme });
    return (
		<button className={classes.button} onClick={onClick}>
			<span className={classes.filmName}>
				{Text}
			</span>
			<div className={classes.img} style={{backgroundImage : `url(${imagePath})` , }} />	
		</button>
	  );
};;