import Image from 'next/image';
import styles from './home.module.css';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/githubProfile.png'}
        width={300}
        height={300}
        alt='Profile Picture'
        quality={100}
      />
      <div className={styles.aboutMe}>
        <h1 className={styles.heading}>Pawan Awasthi</h1>
        <div className={styles.links}>
          <Link href={'https://github.com/pawandai'}>
            <Github className={styles.icon} />
          </Link>
          <Link href={'https://www.linkedin.com/in/pawan-awasthi-5a1a6b244/'}>
            <Linkedin className={styles.icon} />
          </Link>
          <Link href={'https://www.facebook.com/paw1.awasthi'}>
            <Facebook className={styles.icon} />
          </Link>
          <Link href='mailto:contactpawandai@gmail.com'>
            <Mail className={styles.icon} />
          </Link>
        </div>
        <p className={styles.description}>
          I am a self-taught Web Developer from Nepal. I am quite adaptable in
          this fast pacing tech world. I am passionate for learning new things
          and always looking for opportunities to learn new things.
        </p>
        <Link href={'/resume.pdf'} download={'resume'}>
          <button className={styles.button}>Download Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
