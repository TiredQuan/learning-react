import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import styles from './App.module.css'


export default function App(){
    return(
        <div className={styles.App}>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}