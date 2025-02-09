import {useState} from "react";
import Styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 ,faCss3Alt, faJs, faReact  } from  "@fortawesome/free-brands-svg-icons"; 
import {getImageUrl} from "../../Utils"



function Skills(){
    return(
            <div className={Styles.skills}>
                <h2>skills</h2>
                {/* <img src={getImageUrl("imges/css.png")} alt="css icon" /> */}
                <div className={`${Styles.cards}`}>
                    <div className={`${Styles.card}`}>
                        {/* <FontAwesomeIcon icon={faHtml5} /> */}
                      <img src={getImageUrl("imges/R.png")} alt="ll" className="tt"/>
                        <p>HTML</p>
                    </div>
                    <div className={Styles.card}>
                    {/* <FontAwesomeIcon icon={faCss3Alt} /> */}
                      <img src={getImageUrl("imges/file/css.PNG")} alt="ll" className="tt"/>
                    <p>CSS</p>
                    </div>
                    <div className={Styles.card}>
                    {/* <FontAwesomeIcon icon={faJs} /> */}
                    <img src={getImageUrl("imges/html.webp")} alt="ll" className="tt"/>

                    <p>Javascript</p>
                    </div>
                    <div className={Styles.card}>
                    {/* <FontAwesomeIcon icon={faReact} /> */}
                    <img src={getImageUrl("imges/react.png")} alt="ll" className="tt"/>
                    <p>React</p>
                    </div>
                    <div className={`${Styles.card}`}>
                        
                      <img src={getImageUrl("imges/tailwind.png")} alt="ll" className="tt"/>
                        <p>tailwind</p>
                    </div>
                    <div className={`${Styles.card}`}>
                      <img src={getImageUrl("imges/github-logo.webp")} alt="ll" className="tt"/>
                        <p>git hub</p>
                    </div>
                    {/* <div className="card">
                        
                    </div>
                    <div className="card">
                        
                    </div> */}
                </div>
            </div>
            
            
    )
};
export default Skills;