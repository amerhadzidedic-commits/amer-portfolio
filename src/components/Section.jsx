import React from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Section.module.css';

export default function Section({ label, children }) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.label}>{label}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
