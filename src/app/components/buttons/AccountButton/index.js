import React from "react";
import { useCapp } from "../../../context/cappcontext";
import useStyles from "./stylesheet";

export default function AccountButton({onClick}){

    const{theme,currentTheme} = useCapp();
	const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    return (
		<button className={classes.button} onClick={onClick}>
		  <img
			className={classes.image}
			src={`${iconPath}/account.png`}
			alt="Account Icon"
		  />
		</button>
	  );
};