import Appstyles from './App.module.css'
import styles from './TravelCard.module.css'
import {Icon} from '@iconify/react'



export default function Card(props){
    return(
        <div className={`${styles.TravelCard} w-100 d-flex gap-3 align-items-center justify-content-center my-4`}>
            <div className={styles.CardImage} style={{backgroundImage: `url(${props.imgSrc}`}}></div>
            <div className={styles.CardInfo}>
                <p className={`${Appstyles.fSize10} mb-1 d-flex`}><Icon icon="jam:map-marker-f" className={`${styles.icon}`}/><span className={`text-uppercase ${styles.textCountry} me-2`}>{props.country}</span><a target={'_blank'} rel={'noreferrer'} href={props.mapLink}>Place on Google Map</a></p>
                <h3 className={`${Appstyles.fWeight700} ${Appstyles.fSize25} mb-3`}>{props.wonder}</h3>
                <div className={`${Appstyles.fSize10}`}>
                    <p className={`${Appstyles.fWeight700} mb-1`}>{props.date}</p>
                    <p className={`${Appstyles.fWeight400} mb-1`}>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}