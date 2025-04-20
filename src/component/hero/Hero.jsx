import styles from "./hero.module.css"

import computerAvatar from '../../utils/avatar.png';



const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hii, I'm Ashish</h1>
            <p className={styles.description}>I'm a React developer passionate about building dynamic and efficient user interfaces. I specialize in crafting responsive web applications with modern front-end technologies.      
            </p>
            <a href="mailto:kumarmaliashish0@gmail.com" className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src={computerAvatar} alt="Computer Avatar" className={styles.heroimg}/>
        <div className={styles.topblur} />
        <div className={styles.bottomblur} />
    </section>
  )
}

export default Hero