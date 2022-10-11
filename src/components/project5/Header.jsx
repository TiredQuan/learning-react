import gStyles from './App.module.css'
import styles from './Header.module.css'



export default function Header(){
    return(

    <div className={`${styles.Header} w-100 d-flex justify-content-between align-items-center px-4`}>
        <a href="./App.jsx" className={`${gStyles.fWeight700} ${gStyles.fSize20}`}>_Blank Generator</a>
        <p className={`${gStyles.fWeight500} ${gStyles.fSize12} m-0`}>React Course - Project 3</p>
    </div>
    )
}