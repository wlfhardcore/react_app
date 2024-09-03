import React from "react";
import { useCapp } from "../../../context/cappcontext";
import useStyles from "../stylesheet";

export default function ChangeTheme(){

    const{theme,changeTheme,currentTheme} = useCapp();
	const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    return (
		<button className={classes.button} onClick={changeTheme}>
			<img
				src={`${iconPath}/theme.png`}
				alt="Theme Icon"
				style={{width: '35px', height: '35px',backgroundColor:'transparent'}}
				
			/>
		</button>
	);
};