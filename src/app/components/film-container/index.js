import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";

export default function FilmContainer({image,key,alt}) {
    const { currentTheme } = useCapp();
    const classes = useStyles({ theme: currentTheme });
    return (
        <div className={classes.filmContainer}>
            <img className={classes.img} key={key} alt={alt} src={image}/>
        </div>
    );
}
