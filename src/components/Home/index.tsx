import Image from 'next/image';
import styles from './home.module.css';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useAppSelector } from '@/hooks';
import { RiFacebookLine, RiGithubLine } from 'react-icons/ri';

const Home = () => {
  const activeTab = useAppSelector((state) => state.active.value);
  console.log(activeTab);

  return (
    <div
      className={`${styles.container} ${activeTab !== 1 && styles.inactive}`}
    >
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
            <RiGithubLine className={styles.icon} />
          </Link>
          <Link href={'https://www.linkedin.com/in/pawan-awasthi-5a1a6b244/'}>
            <Linkedin className={styles.icon} />
          </Link>
          <Link href={'https://www.facebook.com/paw1.awasthi'}>
            <RiFacebookLine className={styles.icon} />
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
        <Link href={'/resume.pdf'} target='_blank' download={'resume'}>
          <button className={styles.button}>Download Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
