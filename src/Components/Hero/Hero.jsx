import React from "react";
import Styles from "./Hero.module.css"
import {getImageUrl} from "../../Utils"

export const Hero = () => {
    
    return <section className={Styles.container}>
        <div className={Styles.content}>
            <h1>Hi, i'm MOUAAD</h1>
            <p>I'm frontend developer using 
                react  if you would like to learn more! </p>
            <a href="mailto:mouadmhb6@gmail.com">contact me</a>
        </div>
        <img src={getImageUrl("hero/my-img.JPG")} 
        alt="hero image of mouad" 
        className={Styles.heroImg}/>
        <div className={Styles.topBlur} ></div>
        <div className={Styles.bottomBlur}> </div>
    </section>
}