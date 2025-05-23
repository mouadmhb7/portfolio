import React from "react";
import Styles from "./Projects.module.css"
import { getImageUrl } from "../../Utils";

function Projects () {
    return(
        <section className={Styles.projects} id="projects">
            <h1>projects</h1>
            <div className= {Styles.cards}>
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/C.png")} alt="" />
                    <h3>Template one</h3>
                    <p>this is template made with html and css and javascript. </p>
                    <div className={Styles.links}>
                        <a href="https://the-first-wheat.vercel.app/">demo</a>
                        <a href="https://github.com/mouadmhb7/TheFirst">source</a>
                    </div>
                </div>
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/elzero.png")} alt="" />
                    <h3> Template two </h3>
                    <p>this project is made with html and css .</p>
                    <div className={Styles.links}>
                        <a href="https://my-projecte.vercel.app/">demo</a>
                        <a href="https://github.com/mouadmhb7/myProjecte">source</a>
                    </div>
                </div>
                <div className={Styles.box}>
                    <img src={getImageUrl("imges/kasper-project.png")} alt="" />
                    <h3>Template three </h3>
                    <p>this template made with html and css .</p>
                    <div className={Styles.links}>
                        <a href="https://second-ejfc.vercel.app/">demo</a>
                        <a href="https://github.com/mouadmhb7/Casper">source</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;