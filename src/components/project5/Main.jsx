import gStyles from './App.module.css'
import styles from './Main.module.css'


export default function Main(){
    return(
        <div className={`${styles.Main} w-100`}>
            <div className='input-group py-5 px-4'>
                <input className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text1' type="text" />
                <input className={`${gStyles.fWeight400} ${gStyles.fSize12} form-control`} placeholder='text2' type="text" />
            </div>
            <div className='d-grid px-4'><button className={`${styles.btnCustom} btn ${gStyles.fWeight700} ${gStyles.fSize16}`}>Get a new image</button></div>
        </div>
    )
}