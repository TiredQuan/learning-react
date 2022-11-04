import logo from './../../images/Proj1/logo.svg';
import styles from './nav.module.css'
export default function nav(props){
    return(
        <div className={`${styles.dFlex} ${props.lightMode ? styles.light : ""}`}>
        <a className='logo' href='./App.jsx'><img src={logo} alt="" /><h1>ReactFacts</h1></a>
        <div 
                className={`${styles.toggler}`}
                onClick={props.handleToggle} 
            >
              <p className={`${styles.togglerdark} m-0`}>Dark</p>
                <div 
                    className={`${styles.togglerslider}`}
                    onClick={props.toggleDarkMode}
                >
                    <div className={`${styles.togglerslidercircle}`}></div>
                </div>
                <p className={`${styles.togglerlight} m-0`}>Light</p>
            </div>
      </div>
    )
}