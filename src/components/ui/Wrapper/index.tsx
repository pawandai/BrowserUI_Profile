import {
  ArrowLeft,
  ArrowRight,
  Chrome,
  CircleArrowOutDownRightIcon,
  Home,
  List,
  Maximize2,
  Minus,
  X,
} from 'lucide-react';

import styles from './wrapper.module.css';
import { PropsWithChildren } from 'react';
import { FaChrome } from 'react-icons/fa';
import Link from 'next/link';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.windowControls}>
        <div className={styles.dotsWrapper}>
          <div className={`${styles.dots} ${styles.close}`} id='close'>
            <X className={styles.icon} />
          </div>
          <div className={`${styles.dots} ${styles.minimize}`} id='minimize'>
            <Minus className={styles.icon} />
          </div>
          <div className={`${styles.dots} ${styles.maximize}`} id='maximize'>
            <Maximize2 className={`${styles.maximizeIcon} ${styles.icon}`} />
          </div>
        </div>
        <FaChrome className={`${styles.chromeIcon}`} />
      </div>
      <hr />
      <div className={styles.navigationWrapper}>
        <div className={styles.leftNavigation}>
          <ArrowLeft className={styles.navigationIcon} />
          <CircleArrowOutDownRightIcon
            className={`${styles.navigationIcon} ${styles.reload}`}
          />
          <Link href={'/'}>
            <Home className={`${styles.navigationIcon} ${styles.home}`} />
          </Link>
        </div>
        <input type='text' className={styles.input} />
        <div className={styles.rightNavigation}>
          {/* <i className='fa-solid fa-arrow-right go'></i> */}
          <ArrowRight className={`${styles.navigationIcon} ${styles.go}`} />
          {/* <i className='fa-solid fa-list-ul menu'></i> */}
          <List className={styles.navigationIcon} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Wrapper;
