import {useState} from 'react'
import Nav from './nav'
import Section from './section'
import styles from './App.module.css';

export default function App() {
  const [lightMode, setLightMode] = useState(false)

  function handleToggle(){
    return setLightMode(prev=> prev = !prev)
  }

  return (
    <div className={styles.App}>
      <Nav lightMode={lightMode} handleToggle={handleToggle}></Nav>
      <Section lightMode={lightMode}></Section>
    </div>
  );
}

