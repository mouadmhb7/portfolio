import React from "react";
import reactDOM from 'react-dom'
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from "@fortawesome/free-regular-svg-icons"; 
import { faSquareWhatsapp , faWhatsapp , faGithub } from "@fortawesome/free-brands-svg-icons"; 




function Contact() {
    return(
        <div id="contact" className={styles.contact}>
            <h1>contact</h1>
            <div className={styles.container}>
                
                <div className={styles.contacts}>
                    <div className={styles.inputs}>
                        <>
                            <p>full name</p>
                        <input type="text" name="username" placeholder="type your name" />
                        </>
                        <>
                            <p>email</p>
                        <input type="email" name="email" placeholder="type your email" />
                        </>
                        <>
                            <p>text me</p>
                            <textarea name="" id="" placeholder="text me"></textarea>
                        </>
                        <input type="submit" value='send' />
                    </div>
                    <div className={styles.line}></div>
                    <ul className={styles.links}>
                        <p>feel free to rich out!</p>
                        <a href="mailto:mouadmhb6@gmail.com">
                            <li className="flex gap-5" >
                                <a href="emalto:mouadmhb6@gmail.com">
                                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                </a>
                                <span>mouadmhb6@gmail.com</span>
                            </li>
                        </a>
                        <a href="https://wa.me/0691564089">
                            <li className="flex gap-5"> 
                            <a href="https://wa.me/0691564089">
                            <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
                            </a>
                            <span>+212691564089</span>
                            </li> 
                        </a>  
                        <a href="https://github.com/mouadmhb7">
                            <li className="flex gap-5"> 
                            <a href="https://github.com/mouadmhb7">
                            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                            </a>
                            <span>mouadhb</span>
                            </li>
                        </a>  
                    </ul>
                </div>
            </div>   
        </div>
    )
}
export default Contact;