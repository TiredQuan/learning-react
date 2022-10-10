import logo from './../../images/Proj1/logo.svg';
import styles from './nav.module.css'

export default function nav(){
    return(
        <div className={styles.dFlex}>
        <a className='logo' href='./App.jsx'><img src={logo} alt="" /><h1>ReactFacts</h1></a>
        <h2>React Course - Project 1</ h2>
      </div>
    )
}