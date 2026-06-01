import React from 'react';
import Header     from './components/Header';
import Section    from './components/Section';
import Experience from './components/Experience';
import Education  from './components/Education';
import Languages  from './components/Languages';
import Skills     from './components/Skills';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Section label="Experience">
          <Experience />
        </Section>

        <Section label="Education">
          <Education />
        </Section>

        <Section label="Languages">
          <Languages />
        </Section>

        <Section label="Digital Skills">
          <Skills />
        </Section>
      </main>

      <Footer />
    </>
  );
}
