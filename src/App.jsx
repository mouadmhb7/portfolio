
import  styles from'./App.module.css'
import  Navbar  from "./Components/Navbar.jsx"
import { Hero } from './Components/Hero/Hero.jsx'
import About from './Components/about/about.jsx'
import { Experience } from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
function App() {
  

  return (
    <div className={styles.App}>
    {/* Hello world! */}
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