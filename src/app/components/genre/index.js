import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";

export default function Genre() {
    const Text = "Macera";
    const { currentTheme } = useCapp();
    const classes = useStyles({ theme: currentTheme });
    return (
        <div className={classes.shell}>
               <span>{Text}</span> 
        </div>
    );
}
