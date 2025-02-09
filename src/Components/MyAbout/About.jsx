import React from "react";
import Styles from "./About.module.css"

import { getImageUrl } from "../../Utils";

function About (){
    return(
        <section className={Styles.container} id="about">
            <h2>About</h2>
            <div>
                <ul>
                    <li>
                        <div>
                            
                            <p>Hi there! I'm mouaad hbich form larach morocco, a passionate front-end developer can creating engaging and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, and modern frameworks like React
                            </p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </section>
    )
}
export default About