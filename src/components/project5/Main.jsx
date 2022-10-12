import {useState} from 'react'
import gStyles from './App.module.css'
import styles from './Main.module.css'
import data from './data'



export default function Main(){



    const imgArray = data.memes
    const [memeImage, setMemeImage] = useState(imgArray[Math.floor(Math.random()*imgArray.length)].url)
    const [cringeValue1,setCringeValue1] = useState()
    const [cringeValue2,setCringeValue2] = useState()

    let cringeInput1 = document.getElementById('cringe1'),cringeInput2 = document.getElementById('cringe1')
    function submitCringe(){
        setCringeValue1(cringeInput1.value)
        setCringeValue2(cringeInput2.value)
    }
    //This code is fucking garbage, Watch the tutorial again and redo it for fuck sake

    
    function getImage(){
        const randomNumber = Math.floor(Math.random()*imgArray.length)
        return setMemeImage(prevImage => prevImage = imgArray[randomNumber].url)
    }
    return(
        <div className={`${styles.Main} px-4 w-100`}>
            <div className='input-group py-5'>
                <input id='cringe1' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text1' type="text" />
                <input id='cringe2' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text2' type="text" />
            </div>
            <div className='d-grid py-3'><button className={`${styles.btnCustom} btn ${gStyles.fWeight700} ${gStyles.fSize16}`} onClick={()=>{getImage(); submitCringe()}}>Get a new image</button></div>
            <p>{cringeValue1}</p>
            <img className='w-100 ' src={memeImage} alt="" />
            <p>{cringeValue2}</p>
        </div>
    )
}