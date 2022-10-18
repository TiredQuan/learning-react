import styles from './App.module.css'
import Header from './Header'
import Main from './Main'



export default function App(){


    return(
        <div className={`${styles.App} mx-auto`}>
            <Header></Header>
            <Main></Main>
        </div>
    )
}