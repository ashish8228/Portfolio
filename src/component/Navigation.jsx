import { useEffect, useRef, useState } from "react";
import "./Navigation.css"
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {

  const[openmenu , setmenu] = useState(false);
  
  const togglemenu = ()=>{
    setmenu(!openmenu);
  }
  
  
  return (
    
    <nav className="navbar">
        <h2 className="title">Portfolio</h2>
        <div className="menu">
          <button  className="icon" onClick={togglemenu} >
              <GiHamburgerMenu size={"25px"} />
            </button>
          <ul className={openmenu ? 'menuitems active' : 'menuitems'} onClick={()=>setmenu(false)}>
            <li><a href="https://drive.google.com/file/d/1kODpqCPskSgFoZmHLESjqlgbOwesGQjC/view?usp=drive_link">Resume</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
          

        </div>
    </nav>
  )
}

export default Navigation