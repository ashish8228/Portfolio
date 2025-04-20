import React from "react";

import styles from "./Projects.module.css";
import projectdata from "../../datafile/projectdata";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="Projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectdata.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};