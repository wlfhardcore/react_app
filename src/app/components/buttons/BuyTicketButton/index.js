import React from "react";
import { useCapp } from "../../../context/cappcontext";
import useStyles from "./stylesheet";

export default function BuyTicketButton({onClick}){
	const Text = "Bilet Al";
    const{theme,currentTheme} = useCapp();
	const classes = useStyles({ theme: currentTheme });
    return (
		<button className={classes.button} onClick={onClick}>
		  <span>{Text}</span>
		</button>
	  );
};