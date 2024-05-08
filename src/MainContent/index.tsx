// import Contact from '@/components/Contact';
import Home from '@/components/Home';
// import Profile from '@/components/Profile';
// import Projects from '@/components/Projects';
// import Skills from '@/components/Skills';
import styles from './main.module.css';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Home />
      {/* <Profile />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default MainContent;
