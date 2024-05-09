import { useAppSelector } from '@/hooks';
import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const activeTab = useAppSelector((state) => state.active.value);

  return (
    <div
      className={`${styles.inactive} ${activeTab === 3 && styles.container}`}
    >
      <Link href={'https://www.destinationaus.com'} target='_blank'>
        <Image
          src={'/destinationAustralia.png'}
          alt='Destination Australia'
          height={300}
          width={531}
          className={styles.image}
        />
      </Link>
    </div>
  );
};

export default Projects;
