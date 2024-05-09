'use client';

import { navLinks } from '@/constants';
import styles from './navigation.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addState } from '@/redux/slice/activeSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.active.value);

  return (
    <div className={styles.navContainer}>
      <header className={styles.navList}>
        {navLinks.map((nav) => {
          return (
            <div
              onClick={() => {
                dispatch(addState(nav.id));
              }}
              key={nav.id}
              className={styles.navItem}
            >
              <span
                className={`${styles.linkIcon} ${
                  activeTab === nav.id ? styles.active : ''
                }`}
              >
                {<nav.icon />}
              </span>
              <span className={styles.linkTitle}>{nav.name}</span>
            </div>
          );
        })}
      </header>
    </div>
  );
};

export default Navbar;
