import logo from './../../images/Proj1/logo.svg';
import './nav.css'

export default function nav(){
    return(
        <nav className='d-flex'>
        <a className='logo' href='#'><img src={logo} alt="" /><h1>ReactFacts</h1></a>
        <h2>React Course - Project 1</ h2>
      </nav>
    )
}