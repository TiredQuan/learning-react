import styles from './section.module.css'


export default function Section(){
    return(
        <section className={styles.section}>
        <h3 className={styles.h3}>Fun facts about React</h3>
        <ul className={styles.ul}>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </section>
    )
}