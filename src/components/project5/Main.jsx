import {useState,useEffect} from 'react'
import gStyles from './App.module.css'
import styles from './Main.module.css'



export default function Main(){



    const [imgArray,setImgArray] = useState()

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setImgArray(data.data.memes))
    }, [])
    
    const [cringeGod, setCringeGod] = useState({
        memeImage: "https://i.imgflip.com/1bij.jpg",
        cringeValue1: 'Sample Text',
        cringeValue2: 'Sample Text',
    }
    )
    function submitCringe(event){
        if(event.target.value === ''){
            return setCringeGod(prefCringe => ({
                ...prefCringe,
                [event.target.name]:'Sample Text',
            }))
        } else{
            return setCringeGod(prefCringe => ({
                ...prefCringe,
                [event.target.name]:event.target.value,
            }))
        }
    }
    

    function getImage(){
        const randomNumber = Math.floor(Math.random()*imgArray.length)
        return setCringeGod(prefCringe => ({
            ...prefCringe,
            memeImage:imgArray[randomNumber].url,
        }))
    }
    return(
        <div className={`${styles.Main} px-4 w-100`}>
            <div className='input-group py-5'>
                <input id='cringe1' onChange={submitCringe} name='cringeValue1' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text1' type="text" />
                <input id='cringe2' onChange={submitCringe} name='cringeValue2' className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text2' type="text" />
            </div>
            <div className={`d-grid py-3`}>
                <button className={`${styles.btnCustom} btn ${gStyles.fWeight700} ${gStyles.fSize16}`} onClick={()=>{getImage()}}>Get a new image</button>
                </div>
            <div className={` ${styles.cringer}`}>  
                <p className={`${styles.cringeCarrier} ${styles.cringeCarrier1}`}>{cringeGod.cringeValue1}</p>
                <img className='w-100 ' src={cringeGod.memeImage} alt="" />
                <p className={`${styles.cringeCarrier} ${styles.cringeCarrier2}`}>{cringeGod.cringeValue2}</p>
            </div>
        </div>
    )
}