import React from "react";
import { TicketFilmList,MovieTheaterList, SessionList } from "../../components/index";
import { useCapp } from "../../context/cappcontext";
import useStyles from "./stylesheet";

export default function BuyPhase() {
    const{theme,currentTheme} = useCapp();
	const classes = useStyles({ theme: currentTheme });
    return (
        <div className={classes.desktop}>
            <TicketFilmList />
            <MovieTheaterList />
            <SessionList />
        </div>
    )
}