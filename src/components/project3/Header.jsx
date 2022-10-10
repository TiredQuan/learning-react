import styles from './Header.module.css'
import logo from './../../images/Proj3/logo.png'

export default function Header(){
    return(
        <div className={styles.header}>
            <a href="./App.jsx"><img src={logo} alt="" /></a>
        </div>
    )
}