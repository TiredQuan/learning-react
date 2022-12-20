import { useState } from 'react'
import App1 from './project1/App'
import App2 from './project2/App'
import App3 from './project3/App'
import App4 from './project4/App'
import App5 from './project5/App'
import styles from './MainApp.module.css'

export default function MainApp(){
    const appArray = [App1,App2,App3,App4,App5]
    let [arrayIndex, setArrayIndex] = useState()
    let currentApp
        switch (arrayIndex)
            {
                case 0:
                    currentApp = <App1/>
                    break
                case 1:
                    currentApp = <App2/>
                    break
                case 2:
                    currentApp = <App3/>
                    break
                case 3:
                    currentApp = <App4/>
                    break
                case 4:
                    currentApp = <App5/>
                    break
                default:
                    currentApp = ''
                    break
            }
    return(
        <div className={`container ${styles.MainApp}`}>
            <nav>
                <ul className={`d-flex `}>
                    {appArray.map((e,index)=>(
                        <li key={index} className='list-group-item'>
                            <button onClick={()=>setArrayIndex(index)}>Project {index+1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
            {currentApp}
        </div>
    )
}