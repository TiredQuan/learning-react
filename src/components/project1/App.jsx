import Nav from './nav'
import Section from './section'
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Nav></Nav>
      <Section></Section>
    </div>
  );
}

