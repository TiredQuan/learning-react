import styles from './App.module.css'
import { Icon } from '@iconify/react'
import TravelCard from './TravelCard'
import data from './data.js'

export default function App(){
    return(
        <div className={styles.App}>
            <div className={`text-center d-flex justify-content-center align-items-center gap-1 ${styles.nav}`}>
                <Icon icon="fa6-solid:earth-americas" />
                <p href="./App.jsx" className={`${styles.fSize14} ${styles.fWeight500} m-0`}>my travel journal.</p>
            </div>
            <section className={`mt-5`}>
                {data.map(e=>(
                    <TravelCard key={e.id} {...e}></TravelCard>
                ))}
            </section>
        </div>
    )
}