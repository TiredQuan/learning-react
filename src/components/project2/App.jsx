import Header from './Header'
import Footer from './Footer'

import styles from './App.module.css'

export default function App(){
    return(
        <div className={styles.App}>
            <Header></Header>
            <Footer></Footer>
        </div>
    )
}