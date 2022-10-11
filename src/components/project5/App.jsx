import styles from './App.module.css'
import Header from './Header'
import Main from './Main'
export default function App(){

    async function fetchData() {
        return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(function(json){
            var x = json
            // console.log(x)
            return x
        })
        }
        
    return(
        <div className={`${styles.App} mx-auto`}>
            <Header></Header>
            <Main></Main>
        </div>
    )
}