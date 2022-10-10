import { Icon } from '@iconify/react';
import gloStyles from './App.module.css'
import styles from './Footer.module.css'

export default function Footer(){
    return(
    <div className={`${styles.footer2} py-3 d-flex align-items-center justify-content-center gap-3`}>
        <a href="./Footer.jsx" className='link-light mx-1'><Icon className={`${gloStyles.fSize25}`} icon="fa-brands:twitter-square" /></a>
        <a href="./Footer.jsx" className='link-light mx-1'><Icon className={`${gloStyles.fSize25}`} icon="fa-brands:facebook-square" /></a>
        <a href="./Footer.jsx" className='link-light mx-1'><Icon className={`${gloStyles.fSize25}`} icon="fa-brands:instagram-square" /></a>
        <a href="./Footer.jsx" className='link-light mx-1'><Icon className={`${gloStyles.fSize25}`} icon="fa-brands:github-square" /></a>
    </div>
    )
}