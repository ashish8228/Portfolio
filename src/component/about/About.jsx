import React from "react";

import data from "../../datafile/data";
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {data.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.image} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.about}>
                <p>
                
                I'm a Frontend-Focused Web Developer. I build and manage the front part of websites and web apps to make them work well and look great. My goal is to create smooth, user-friendly experiences that help websites succeed. You can check out some of my work in the Projects section.

                I also enjoy sharing what I learn about web development, so I can help other developers grow and improve. Whether it's tips, tricks, or useful resources, I love contributing to the developer community. Feel free to connect or follow me on <a href="https://www.linkedin.com/in/ashishkumarmali/">Linkedin</a>, where I regularly post helpful content about web development and programming.</p>
        </div>
            
        </div>
    </section>
  );
};