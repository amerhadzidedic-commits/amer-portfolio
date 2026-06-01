import React from 'react';
import { personal } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        {personal.name} {personal.surname} — <span className={styles.accent}>2024</span>
      </div>
      <div>{personal.location}</div>
    </footer>
  );
}
