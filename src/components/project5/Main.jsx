import {useState} from 'react'
import gStyles from './App.module.css'
import styles from './Main.module.css'
import data from './data'



export default function Main(){



    const [memeImage, setMemeImage] = useState("")


    function getImage(){
        const imgArray = data.memes
        const randomNumber = Math.floor(Math.random()*imgArray.length)
        return setMemeImage(prevImage => prevImage = imgArray[randomNumber].url)
    }
    return(
        <div className={`${styles.Main} px-4 w-100`}>
            <div className='input-group py-5'>
                <input className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text1' type="text" />
                <input className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text2' type="text" />
            </div>
            <div className='d-grid py-3'><button className={`${styles.btnCustom} btn ${gStyles.fWeight700} ${gStyles.fSize16}`} onClick={getImage}>Get a new image</button></div>
            <img className='w-100 ' src={memeImage} alt="" />
        </div>
    )
}