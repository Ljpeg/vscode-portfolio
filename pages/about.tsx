import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>La Tasha Pollard</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
             Hello World! I am a security focused software engineer, 
             based in Chicago, IL.
             I am a career changing, self-learning, bootcamp grad led by
             curiosity and a deep desire to continously expand my knowledge
             and skills to make a greater impact as a software engineer. 
            </p>
            <p className={styles.paragraph}>
              
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I completed a coding program with  
              <span className={styles.highlight}> Ada Developers Academy </span> 
               and after the intensive six month technical curriculum I began my
              software engineering internship at  
              <span className={styles.highlight}> Microsoft</span>. 
              I was fortunate that my work ethic during my internship was 
              recognized with an offer to convert to a full time Software Engineer. 
            </p>
            <p className={styles.paragraph}>
              In my journey I have developed my technical skills to include{' '}
              <span className={styles.highlight}>Python</span>,{' '} 
              <span className={styles.highlight}>Flask</span>,{' '} 
              <span className={styles.highlight}>Javascript</span>,{' '}
              <span className={styles.highlight}>Node</span>,{' '}
              <span className={styles.highlight}>React</span>,{' '}  
              <span className={styles.highlight}>SQL</span>,{' '} 
              <span className={styles.highlight}>security focused automation</span>,{' '}
              and <span className={styles.highlight}>cloud computing</span>. 
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Currently</h2>
            <p className={styles.paragraph}>
              I am studying to earn a few certifications to expand my 
              skills{' '}
              <span className={styles.highlight}>CompTIA Security+</span>,{' '}
              <span className={styles.highlight}>Google IT Support</span>,{' '}
              <span className={styles.highlight}>Linux Foundation: Certified 
                Kubernetes Application Developer</span> 
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Before transition into the tech world, I earned my bachelor's in
              African American Studies from UC Berkeley and my master's in 
              Education Policy from University of Illinois, Chicago. </p>

              <p className={styles.paragraph}>I find joy in storytelling through videography, playing basketball, 
              and taking care of my plant babies. 
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
