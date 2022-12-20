import styles from './Footer.module.css'
import gStyles from './App.module.css'
import { Icon } from '@iconify/react';
import card1 from './../../images/Proj3/image12.png'
import card2 from './../../images/Proj3/wedding-photography1.png'
import card3 from './../../images/Proj3/mountain-bike1.png'

export default function Footer(){

    const cardData = [
    {
        id:1,
        image: card1,
        star: 5.0,
        place: 6,
        cardHead: "Life lessons with Katie Zaferes",
        price: 136,
        sold:1,
        soldPlus:'sold out'
    },
    {
        id:2,
        image: card2,
        star: 5.0,
        place: 30,
        cardHead: "Learn wedding photography",
        price: 125,
        sold:1,
        soldPlus:'online'
    },
    {
        id:3,
        image: card3,
        star: 4.8,
        place: 2,
        cardHead: "Group Mountain Biking",
        price: 50,
        sold:0,
        soldPlus:''

    }
]

    return(
        <div className={styles.footer + ' mx-4 d-flex gap-3'}>
            {cardData.map(cardData => (
            <div key={cardData.id} className={styles.expGroup}>       
                <img className={styles.image + 'w-100 mb-2'} src={cardData.image} alt="" />
                <p className={`${gStyles.fWeight300} ${gStyles.fSize12} d-flex align-items-center mb-1`}><Icon className={styles.star + ' me-1 fSize14'} icon="clarity:star-solid" />{cardData.star}<span className=" ms-1 p-gray">({cardData.place}) · USA</span></p>
                <p className={`${gStyles.fWeight300} ${gStyles.fSize12} mb-1`}>{cardData.cardHead}</p>
                <p className={`${gStyles.fWeight600} ${gStyles.fSize12} mb-1`}> From ${cardData.price} <span className={gStyles.fWeight300}>/ person</span></p>
                
                {cardData.sold
                ? <div className={`${styles.cardSold} text-uppercase ${gStyles.fSize10}`}><p className='my-1 mx-2'>{cardData.soldPlus}</p></div>
                : ''
                }
            </div>
            ))}
        </div>
    )
}