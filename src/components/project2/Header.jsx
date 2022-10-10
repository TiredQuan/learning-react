import { Icon } from '@iconify/react';
import ava from './../../images/Proj2/ava.png'
import gloStyles from './App.module.css'
import styles from './Header.module.css'

export default function Header(){
    return(
        <div className={`${styles.header}`}>
            <img src={ava} className='w-100' alt="" />
            <div className='my-4 text-center'>
                <h1 className={`${gloStyles.fWeight700} ${gloStyles.fSize25} mt-1 mb-0`}>Laura Smith</h1>
                <p className={`${gloStyles.fWeight400}  ${gloStyles.fSize13} role-color mb-2`}>Frontend Developer</p>
                <p className={`${gloStyles.fWeight400}  ${gloStyles.fSize10} my-1`}>laurasmith.website</p>
            </div>
            <div className="row gap-2 mx-4 pb-5">
            <button className={`${gloStyles.fSize16} ${gloStyles.fWeight500} btn btn-lg btn-light col d-flex justify-content-center align-items-center`}>
            <Icon icon="mdi:email" className={`me-2 ${gloStyles.fSize18}`}/> Email</button>
            <button className={`${gloStyles.fSize16} ${gloStyles.fWeight500} btn btn-lg btn-primary col d-flex justify-content-center align-items-center`}>
            <Icon icon="akar-icons:linkedin-box-fill" className={`me-2 ${gloStyles.fSize18}`}/> Linkedin</button>
            </div>
            <section className='mx-4 pb-4'>
                <h2 className={`${gloStyles.fWeight700} ${gloStyles.fSize16}`}>About</h2>
                <p className={`${gloStyles.fWeight400} ${gloStyles.fSize10}`}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className={`${gloStyles.fWeight700} ${gloStyles.fSize16}`}>Interest</h2>
                <p className={`${gloStyles.fWeight400} ${gloStyles.fSize10}`}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </div>
    )
}