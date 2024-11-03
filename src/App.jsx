
import  styles from'./App.module.css'
import  Navbar  from "./Components/Navbar.jsx"
import { Hero } from './Components/Hero/Hero.jsx'

function App() {
  

  return (
    <div className={styles.App}>
    {/* Hello world! */}
    <Navbar />
    <Hero/>
  </div>
  
  )
}

export default App
