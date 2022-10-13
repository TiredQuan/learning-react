import {useState} from 'react'
import gStyles from './App.module.css'
import styles from './Main.module.css'
import data from './data'



export default function Main(){



    const imgArray = data.memes
    const [cringeGod, setCringeGod] = useState({
        memeImage: imgArray[Math.floor(Math.random()*imgArray.length)].url,
        cringeValue1: 'Sample Text',
        cringeValue2: 'Sample Text',
    }
    )

    let cringeInput1 = document.getElementById('cringe1'),cringeInput2 = document.getElementById('cringe2')
    function submitCringe(){
        if(cringeInput1.value === '' || cringeInput2.value === ''){
            setCringeGod(prefCringe => ({
                ...prefCringe,
                cringeValue1:'Sample Text',
                cringeValue2:'Sample Text',
            }))
        } else{
            setCringeGod(prefCringe => ({
                ...prefCringe,
                cringeValue1:cringeInput1.value,
                cringeValue2:cringeInput2.value,
            }))
        }
    }
    
    function getImage(){
        const randomNumber = Math.floor(Math.random()*imgArray.length)
        setCringeGod(prefCringe => ({
            ...prefCringe,
            memeImage:imgArray[randomNumber].url,
        }))
    }
    return(
        <div className={`${styles.Main} px-4 w-100`}>
            <div className='input-group py-5'>
                <input id='cringe1' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text1' type="text" />
                <input id='cringe2' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text2' type="text" />
            </div>
            <div className={`d-grid py-3 ${styles.cringer}`}>
                <button className={`${styles.btnCustom} btn ${gStyles.fWeight700} ${gStyles.fSize16}`} onClick={()=>{getImage(); submitCringe()}}>Get a new image</button>
                </div>
            <p className={`${styles.cringeCarrier} ${styles.cringeCarrier1}`}>{cringeGod.cringeValue1}</p>
            <img className='w-100 ' src={cringeGod.memeImage} alt="" />
            <p className={`${styles.cringeCarrier} ${styles.cringeCarrier2}`}>{cringeGod.cringeValue2}</p>
        </div>
    )
}