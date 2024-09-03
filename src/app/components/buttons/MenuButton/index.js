import React from "react";
import { useCapp } from "../../../context/cappcontext";
import useStyles from '../stylesheet';

export default function MenuButton(){
    const { theme, currentTheme,toggleMenu } = useCapp();
    const classes = useStyles({ theme: currentTheme });
    const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
    return (
		<button className={classes.button} onClick={toggleMenu}>
			<img
				src={`${iconPath}/menus.png`}
				alt="Menu"
				style={{width: '35px', height: '35px',backgroundColor:'transparent'}}	
			/>
		</button>
	);
}