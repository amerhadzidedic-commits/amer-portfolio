import React, { useEffect, useRef, useState } from 'react';
import { languages } from '../data';
import { useInView } from '../hooks/useInView';
import styles from './Languages.module.css';

export default function Languages() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={styles.grid}>
      {languages.map((lang, i) => (
        <div key={i} className={styles.item}>
          <h3 className={styles.langName}>{lang.name}</h3>
          <div className={styles.barWrap}>
            <div
              className={styles.bar}
              style={{ width: inView ? `${lang.pct}%` : '0%' }}
            />
          </div>
          <p className={styles.level}>{lang.level}</p>
        </div>
      ))}
    </div>
  );
}
