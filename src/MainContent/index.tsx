import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import styles from './main.module.css';
import Skills from '@/components/Skills';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainContent;
