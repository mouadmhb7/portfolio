import React,{useState} from "react";
import {getImageUrl} from "./../Utils";
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faXmark } from "@fortawesome/free-solid-svg-icons"; 

function Navbar(){
        
    const [menuOpen ,setMenuOpen]= useState(false)

    function ToggleTheIcon(){
        setMenuOpen(!menuOpen)
    }

    function changeTheNav(){
        
        if(scrollY = 0){
            
        }
    }
    return(

        <nav onChange={changeTheNav}>
            <div className={Styles.logo}>
                <img src={getImageUrl("logo/my-logo1.png")} />
            </div>
        

            <div className={Styles.menu}>

                <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}>

                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">skills</a></li>
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#contact">Contacts</a></li>
                    
                </ul>
                <div className={`${!menuOpen && Styles.icon}`} onClick={ToggleTheIcon}  >
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 

             


                    <div className={`${Styles.not} ${menuOpen && Styles.open}`}>
                    <FontAwesomeIcon icon={faXmark} />
                    </div>   
                </div>

            </div>

        </nav>
    )
}
export default Navbar;