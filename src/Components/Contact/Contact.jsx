import React from "react";
import reactDOM from 'react-dom'
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; 
import { faSquareWhatsapp , faWhatsapp} from "@fortawesome/free-brands-svg-icons"; 




function Contact() {
    return(
        <footer id="contacts">
            <h1>contact</h1>
            <div className={styles.container}>
                
                <div className={styles.contacts}>

                <ul className={styles.links}>
                        <p>feel free to rich out!</p>
                        <a href="mailto:ilyas.alinane@gmail.com">
                            <li className="flex gap-5" >
                                <a href="emalto:ilyas.alinane@gmail.com">
                                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                </a>
                                <span>ilyas.alinane@gmail.com</span>
                            </li>
                        </a>
                        <a href="https://wa.me/0607605389">
                            <li className="flex gap-5"> 
                            <a href="https://wa.me/0607605389">
                            <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
                            </a>
                            <span>0670326513</span>
                            </li>
                        </a>    
                    </ul>

                    <div className={styles.inputs}>
                        <input type="text" name="username" placeholder="type your name" />
                        <input type="email" name="email" placeholder="type your email" />
                        <textarea name="" id=""></textarea>
                        <input type="submit" value='send' />
                    </div>
                    
                </div>
            </div>   
        </footer>
    )
}
export default Contact;