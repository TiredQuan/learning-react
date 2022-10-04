import './Header.css'
import { Icon } from '@iconify/react';
import ava from './../../images/Proj2/ava.png'

export default function Header(){
    return(
        <header className='text-center'>
            <img src={ava} className='w-100' alt="" />
            <div className='my-4'>
                <h1 className='f-weight-700 f-size-25 mt-1 mb-0'>Laura Smith</h1>
                <p className='f-weight-400 f-size-13 role-color mb-2'>Frontend Developer</p>
                <p className='f-weight-400 f-size-10 my-1'>laurasmith.website</p>
            </div>
            <div className="row gap-3 mx-3 pb-5">
            <button className='f-size-16 f-weight-500 btn btn-lg btn-light col d-flex justify-content-center align-items-center'>
            <Icon icon="mdi:email" className='me-2 f-size-18'/> Email</button>
            <button className='f-size-16 f-weight-500 btn btn-lg btn-primary col d-flex justify-content-center align-items-center'>
            <Icon icon="akar-icons:linkedin-box-fill" className='me-2 f-size-18'/> Linkedin</button>
            </div>
        </header>
    )
}