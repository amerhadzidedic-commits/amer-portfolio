import React from 'react';
import { experience } from '../data';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.list}>
      {experience.map((job, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.date}>
            <span className={styles.dot} />
            {job.period.split('—').map((p, j) => (
              <span key={j}>
                {p.trim()}
                {j === 0 && <br />}
                {j === 0 && '—'}
                {j === 0 && <br />}
              </span>
            ))}
            <br />
            <br />
            {job.location}
          </div>
          <div>
            <h2 className={styles.title}>{job.title}</h2>
            <p className={styles.company}>{job.company}</p>
            <p className={styles.desc}>{job.description}</p>
            {job.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
