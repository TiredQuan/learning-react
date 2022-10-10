import gStyles from './App.module.css'
import styles from './Main.module.css'


export default function Main(){
    return(
        <div className={styles.main3}>
        <section className={styles.imageHero + ' d-flex justify-content-center align-items-center mb-3'}>
            <img src={require("./../../images/Proj3/image28.png")} alt="" />
            <div className="align-self-start mt-1">
                <img src={require("./../../images/Proj3/image30.png")} alt="" />
                <img src={require("./../../images/Proj3/image26.png")} alt="" />
            </div>
            <div className="align-self-end">
                <img src={require("./../../images/Proj3/image27.png")} alt="" />
                <img src={require("./../../images/Proj3/image29.png")} alt="" />
            </div>
            <div className="align-self-start">
                <img src={require("./../../images/Proj3/image22.png")} alt="" />
                <img src={require("./../../images/Proj3/image23.png")} alt="" />
            </div>
            <div className="">
                <img src={require("./../../images/Proj3/image25.png")} alt="" />
                <img src={require("./../../images/Proj3/image24.png")} alt="" />
            </div>
        </section>
        <section className='mx-4'>
            <h1 className={`my-3 text-capitalize ${gStyles.fSize36} ${gStyles.fWeight600}`}>Online experiences</h1>
            <p className={`${gStyles.fSize16} ${gStyles.fWeight300}`}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    </div>
    )
}