
import styles from "./App.module.css";
import Navigation from "./component/Navigation";
import { About } from "./component/about/About";
import { Contact } from "./component/contact/Contact";
import Hero from "./component/hero/Hero";
import { Projects } from "./component/project/Projects";


function App() {

  return (
    <div className={styles.App}>
      <Navigation />
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
