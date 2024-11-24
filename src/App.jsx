
import  styles from'./App.module.css'
import  Navbar  from "./Components/Navbar.jsx"
import { Hero } from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
function App() {
  

  return (
    <div className={styles.App}>
    
    <Navbar />
    <Hero/>
    <About ></About>
    {/* <Experience /> */}
    <Projects />
    <Contact />
  </div>
  
  )
}

export default App
