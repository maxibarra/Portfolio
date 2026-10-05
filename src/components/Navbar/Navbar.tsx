import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import logoMI from '../../assets/logo-mi.png';
import { navigation } from '../../data/navigation';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isNavigating = useRef(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const updateActiveSection = () => {
      if (isNavigating.current) return;

      const sectionIds = [
        'inicio',
        'sobre-mi',
        'proyectos',
        'contacto',
      ];

      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = 'inicio';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });

    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const id = href.replace('#', '');
    const section = document.getElementById(id);

    if (!section) return;

    isNavigating.current = true;

    setActiveSection(id);
    closeMenu();

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.setTimeout(() => {
      isNavigating.current = false;
    }, 800);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a
          href="#inicio"
          className={styles.brand}
          aria-label="Ir al inicio"
        >
          <img
            src={logoMI}
            alt=""
            className={styles.logoImage}
            draggable={false}
          />

          <span className={styles.name}>
            Maximiliano Ibarra
          </span>
        </a>

        <div
          className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''
            }`}
        >
          <ul className={styles.navLinks}>
            {navigation.map((item) => (

              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(event, item.href)
                  }
                  className={`${styles.navLink} ${activeSection === item.href.replace('#', '')
                    ? styles.navLinkActive
                    : ''
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            <a
              href="https://github.com/maxibarra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <FaGithub size={20} />

            </a>

            <a
              href="https://linkedin.com/in/maximiliano-ibarra"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
          <span> Menu </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;