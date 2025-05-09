import React from "react";

import styles from "./Contact.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { LuMail } from "react-icons/lu";

export const Contact = () => {
  return (
    <section id="Contact">
    <footer  className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <LuMail size={"30px"} />
          <a href="mailto:kumarmaliashish0@gmail.com">kumarmaliashish@gmail.com</a>
        </li>
        <li className={styles.link}>
        <FaLinkedin  size={"30px"} /> 
          <a href="https://www.linkedin.com/in/ashishkumarmali/">linkedin.com/AshishKumarMali</a>
        </li>
        <li className={styles.link}>
          <SiGithub  size={"30px"} />
          <a href="https://github.com/ashish8228">github.com/ashish8228</a>
        </li>
      </ul>
    </footer>
    </section>
  );
};