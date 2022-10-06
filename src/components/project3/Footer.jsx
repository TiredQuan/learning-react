import styles from './Footer.module.css'
import { Icon } from '@iconify/react';
import card1 from './../../images/Proj3/image12.png'
import card2 from './../../images/Proj3/wedding-photography1.png'
import card3 from './../../images/Proj3/mountain-bike1.png'

export default function Footer(){

    const cardData = [
    {
        image: card1,
        star: 5.0,
        place: 6,
        cardHead: "Life lessons with Katie Zaferes",
        price: 136
    },
    {
        image: card2,
        star: 5.0,
        place: 30,
        cardHead: "Learn wedding photography",
        price: 125
    },
    {
        image: card3,
        star: 4.8,
        place: 2,
        cardHead: "Group Mountain Biking",
        price: 50

    }
]

    return(
        <div className={styles.footer + ' mx-4 d-flex gap-3'}>
            {cardData.map(cardData => (
                <div className={styles.expGroup}>
                <img className={styles.image + 'w-100 mb-2'} src={cardData.image} alt="" />
                <p className='f-weight-300 d-flex align-items-center f-size-12 mb-1'><Icon className={styles.star + ' me-1 f-size-14'} icon="clarity:star-solid" />{cardData.star}<span className=" ms-1 p-gray">({cardData.place}) · USA</span></p>
                <p className='f-weight-300 f-size-12 mb-1'>{cardData.cardHead}</p>
                <p className='f-weight-600 f-size-12 mb-1'> From ${cardData.price} <span className='f-weight-300'>/ person</span></p>
            </div>
            ))}
            
        </div>
    )
}