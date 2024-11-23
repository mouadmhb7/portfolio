import React from "react";
import Styles from "./Projects.module.css"
import { getImageUrl } from "../../Utils";

function Projects () {
    return(
        <section className={Styles.projects} id="projects">
            <h1>projects</h1>
            <div className= {Styles.cards}>
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/aboIbrahim.jpg")} alt="" />
                    <h3>project A</h3>
                    <p>thi project is a video for a hospital to show</p>
                    <div className={Styles.links}>
                        <a href="">demo</a>
                        <a href="">source</a>
                    </div>
                </div >
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/aboIbrahim.jpg")} alt="" />
                    <h3>project B</h3>
                    <p>thi project is a video for a hospital to show</p>
                    <div className={Styles.links}>
                        <a href="">demo</a>
                        <a href="">source</a>
                    </div>
                </div>
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/aboIbrahim.jpg")} alt="" />
                    <h3>project c</h3>
                    <p>thi project is a video for a hospital to show</p>
                    <div className={Styles.links}>
                        <a href="">demo</a>
                        <a href="">source</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;