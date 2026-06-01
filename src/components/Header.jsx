import React from 'react';
import { personal } from '../data';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* ── LEFT PANEL ── */}
      <div className={styles.left}>
        <div>
          <p className={styles.eyebrow}>Portfolio · CV · 2024</p>
          <h1 className={styles.name}>
            {personal.name}<br />
            <em>{personal.surname}</em>
          </h1>
          <p className={styles.tagline}>{personal.tagline}</p>
        </div>

        <div className={styles.meta}>
          {[
            ['Born',    personal.dob],
            ['Based in', personal.location],
            ['Phone',   personal.phone],
            ['Email',   personal.email],
          ].map(([label, val]) => (
            <div key={label} className={styles.metaItem}>
              <span className={styles.metaLabel}>{label}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className={styles.right}>
        <span className={styles.bigInitial}>AH</span>
        <div className={styles.rightInner}>
          <p className={styles.contactTitle}>Quick Contact</p>
          <div className={styles.contactGrid}>
            {[
              ['Location',    personal.location],
              ['Nationality', personal.nationality],
              ['Current Role','SME Shift-Lead'],
              ['Driving',     'AM / B Licence'],
            ].map(([label, val]) => (
              <div key={label} className={styles.contactItem}>
                <strong>{label}</strong>
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
