import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Maximiliano Ibarra. Todos los derechos reservados.
        </p>
        <a href="#inicio" className={styles.scrollIndicator}>
            <span>↑</span>
        <span>Volver arriba</span>
        </a>
        <div className={styles.socials}>
          <a
            href="https://github.com/maxibarra"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Maximiliano Ibarra"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/maximiliano-ibarra"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Maximiliano Ibarra"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className={styles.signature}>
          Diseño y desarrollo — <span>Maxi Ibarra</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;