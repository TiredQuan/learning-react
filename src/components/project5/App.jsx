import styles from './App.module.css'
import Header from './Header'
import Main from './Main'



export default function App(){


    return(
        <div className={`${styles.App} mx-auto`}>
            <p>Yeah I know it looks like Shit I don't care I learnt how to use useState, that's all that matters fuck you</p>
            <Header></Header>
            <Main></Main>
        </div>
    )
}