
import  styles from'./App.module.css'
import  Navbar  from "./Components/Navbar.jsx"
import { Hero } from './Components/Hero/Hero.jsx'
import About from './Components/MyAbout/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  

  return (
    <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
  </div>
  
  )
}

export default App
