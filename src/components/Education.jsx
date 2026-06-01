import React from 'react';
import { education } from '../data';
import styles from './Education.module.css';

export default function Education() {
  return (
    <div>
      {education.map((e, i) => (
        <div key={i} className={styles.item}>
          <p className={styles.year}>{e.period}</p>
          <h3 className={styles.degree}>{e.degree}</h3>
          <p className={styles.school}>{e.school} · {e.location}</p>
        </div>
      ))}
    </div>
  );
}
