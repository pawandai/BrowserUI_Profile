'use client';

import { navLinks } from '@/constants';
import styles from './navigation.module.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addState } from '@/redux/slice/activeSlice';

const Navbar = () => {
  const [clickedNav, setClickedNav] = useState<number>(1);
  const activeTab = useAppSelector((state) => state.active.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.navContainer}>
      <header className={styles.navList}>
        {navLinks.map((nav) => {
          return (
            <div
              onClick={() => {
                setClickedNav(nav.id);
                dispatch(addState(clickedNav));
              }}
              key={nav.id}
              className={styles.navItem}
            >
              <span
                className={`${styles.linkIcon} ${
                  clickedNav === nav.id ? styles.active : ''
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
