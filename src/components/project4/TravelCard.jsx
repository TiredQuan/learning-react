import styles from './TravelCard.module.css'
import {Icon} from '@iconify/react'



export default function Card(props){
    return(
        <div className={styles.TravelCard}>
            <div className={styles.CardImage} style={{backgroundImage: `url(${props.imgSrc}`}}></div>
            <div>
                <p><Icon icon="jam:map-marker-f" /><span className='text-uppercase'>{props.country}</span><a target={'_blank'} rel={'noreferrer'} href={props.mapLink}>Place on Google Map</a></p>
                <h3>{props.wonder}</h3>
                <p>{props.date}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}