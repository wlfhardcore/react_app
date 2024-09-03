import { createContext,useContext,useState } from "react";
import darkTheme from '../themes/variants/dark/index.js';
import lightTheme from '../themes/variants/light/index.js';
import { create } from "jss";
import locales from "../locales/index.js";

const Context = createContext();
const Provider = ({children}) =>{
   
    const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState("tr");
    const [isMenuOpen, setIsMenuOpen] = useState("closed");
    const translate = locales[language] || locales.en;

    const changeTheme =()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    const changeLanguage =()=>{
        setLanguage(language === "tr" ? "en" : "tr");
    }
    const toggleMenu = () => {
		setIsMenuOpen(isMenuOpen === "closed" ? "open" : "closed");
	};
    
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

    const data = {
        changeLanguage,
        currentTheme,
        translate,
        changeTheme,
        isMenuOpen,
		toggleMenu,
        language,
        theme,
    }

    return (
		<Context.Provider value={data} >
			{children}
		</Context.Provider>
	)

}

export const useCapp = () => useContext(Context)
export default Provider;