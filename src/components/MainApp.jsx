import App1 from './project1/App'
import App2 from './project2/App'
import App3 from './project3/App'
import App4 from './project4/App'
import styles from './MainApp.module.css'

export default function MainApp(){
    const appArray = [App1,App2,App3,App4]
    let CurrentApp
    function handleSwitch(index){
        switch (index)
            {
                case 0:
                    CurrentApp = App1
                    break
                case 1:
                    CurrentApp = App2
                    break
                case 2:
                    CurrentApp = App3
                    break
                case 3:
                    CurrentApp = App4
                    break
                default:
                    CurrentApp = ''
                    break
            }
    }
    CurrentApp = App1
    return(
        <div className={`container`}>
            <nav>
                <ul className={`d-flex `}>
                    {appArray.map((e,index)=>(
                        <li key={index} className='list-group-item'>
                            <button onClick={()=>handleSwitch(index)}>Project {index+1}</button>
                            {/* The button is currently not rendering my inputs correctly, So I might revert it back to the way it used to be, with absolutely no onclicks and just project 4 */}
                        </li>
                    ))}
                </ul>
            </nav>
            <CurrentApp/>
        </div>
    )
}