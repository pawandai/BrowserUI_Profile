import { useAppSelector } from '@/hooks';
import styles from './contact.module.css';
import Link from 'next/link';
import { RiFacebookLine, RiGithubLine } from 'react-icons/ri';
import { Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const activeTab = useAppSelector((state) => state.active.value);

  return (
    <div
      className={`${styles.container} ${activeTab !== 4 && styles.inactive}`}
    >
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
      <h3>contactpawandai@gmail.com</h3>
      <h3>9866107599</h3>
    </div>
  );
};

export default Contact;
