import React from 'react';
import { skills } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <div className={styles.grid}>
      {skills.map((skill, i) => (
        <span key={i} className={styles.tag}>{skill}</span>
      ))}
    </div>
  );
}
