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
                        <img src="" alt="" />
                        <div>
                            
                            <p>i'm a triw triw  tiw tiw Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas sunt ipsum, maxime dignissimos unde beatae laudantium quod veritatis qui mollitia nihil tempore fuga corrupti odio in dicta, explicabo ipsam?
                            </p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </section>
    )
}
export default About