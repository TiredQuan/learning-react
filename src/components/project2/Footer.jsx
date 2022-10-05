import { Icon } from '@iconify/react';
import './Footer.css'

export default function Footer(){
    return(
    <div className='footer py-3 d-flex align-items-center justify-content-center gap-3'>
        <a href="./Footer.jsx" className='link-dark'><Icon icon="fa:twitter-square" /></a>
        <a href="./Footer.jsx" className='link-dark'><Icon icon="fa:twitter-square" /></a>
        <a href="./Footer.jsx" className='link-dark'><Icon icon="fa:twitter-square" /></a>
        <a href="./Footer.jsx" className='link-dark'><Icon icon="fa:twitter-square" /></a>
    </div>
        )
}