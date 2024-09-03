import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useCapp } from "../../context/cappcontext";
import { Buttons, Genre } from "../index"

export default function FilmInfo() {
    const { BuyTicketButton } = Buttons;
    const { currentTheme } = useCapp();
    const classes = useStyles({ theme: currentTheme });

    const imageSource = "/assets/banners/image4.jpg";
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mobileContainer} 
                style={{backgroundImage : `url(${imageSource})` , }}>
                <div className={classes.mobileInfoContainer}>
                    <h2 className={classes.texts}>Title</h2>
                    <div className={classes.topics}>
                        <Genre /><Genre />
                    </div>
                    <div className={classes.subjectContainer}>
                        <p className={classes.subject}>
                            Konusu:Zamanda yolculuk ederken kazara 2022 yılına zorunlu iniş yapan savaş pilotu Adam Reed, kendi 12 yaşındaki hâliyle iş birliği yaparak geleceği kurtarmaya çalışır. Binlerce seçenek, sınırsız eğlence. Shawn Levy imzalı bilim kurgu macerasında Ryan Reynolds, Zoe Saldaña, Mark Ruffalo ve Jennifer Garner başrollerde.
                        </p>
                    </div>
                    <div className={classes.buttonContainer}>
                        <BuyTicketButton />
                    </div>
                </div>
            </div>
            <div className={classes.infoContainer}>
                <h2 className={classes.texts}>Title</h2>
                <div className={classes.topics}>
                    <Genre /><Genre />
                </div>
                <div className={classes.subjectContainer}>
                    <p className={classes.subject}>
                        Konusu:Zamanda yolculuk ederken kazara 2022 yılına zorunlu iniş yapan savaş pilotu Adam Reed, kendi 12 yaşındaki hâliyle iş birliği yaparak geleceği kurtarmaya çalışır. Binlerce seçenek, sınırsız eğlence. Shawn Levy imzalı bilim kurgu macerasında Ryan Reynolds, Zoe Saldaña, Mark Ruffalo ve Jennifer Garner başrollerde.
                    </p>
                </div>
                <div className={classes.buttonContainer}>
                    <BuyTicketButton />
                </div>
            </div>
            <div className={classes.imageContainer}>
                <img className={classes.img} src={imageSource} />
            </div>

        </div>
    );
}
