import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ljpeg.dev',
    href: 'https://ljpeg.dev/',
  },
  {
    social: 'email',
    link: 'contact@ljpeg.dev',
    href: 'mailto:contact@ljpeg.dev',
  },
  {
    social: 'github',
    link: 'ljpeg',
    href: 'https://github.com/Ljpeg',
  },
  {
    social: 'linkedin',
    link: 'latashapollard',
    href: 'https://www.linkedin.com/in/latashapollard/',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
