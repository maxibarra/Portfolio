import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
} from 'react-icons/si';
import styles from './About.module.css';
import aboutVisual from '../../assets/about/about-visual.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const technologies = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'PHP',
    icon: SiPhp,
  },
  {
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    name: 'Git',
    icon: SiGit,
  },
];

function About() {

  const aboutRef = useRef<HTMLElement | null>(null);
useGSAP(() => {
  const about = aboutRef.current;

  if (!about) return;

  const media = gsap.matchMedia();

  media.add(
    '(prefers-reduced-motion: no-preference)',
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: 'top 72%',
          once: true,
        },
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.from(`.${styles.eyebrow}`, {
        y: 20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          `.${styles.title}`,
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.25',
        )
        .from(
          `.${styles.titleLine}`,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.55,
          },
          '-=0.4',
        )
        .from(
          `.${styles.description} p`,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          '-=0.3',
        )
        .from(
          `.${styles.visualImage}`,
          {
            x: 70,
            y: 25,
            opacity: 0,
            scale: 0.96,
            duration: 1,
          },
          '-=0.75',
        )
        .from(
          `.${styles.techHeader}`,
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.4',
        )
        .from(
          `.${styles.techItem}`,
          {
            y: 14,
            opacity: 0,
            duration: 0.4,
            stagger: 0.07,
          },
          '-=0.25',
        );
    },
  );

  return () => media.revert();
}, { scope: aboutRef });

  return (
    <section ref={aboutRef} id="sobre-mi" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Sobre mí</span>

            <h2 className={styles.title}>
              Desarrollo software
              <br />
              con foco en la experiencia 
              <br />
              y en <span>los detalles.</span>
            </h2>

            <div className={styles.titleLine} />

            <div className={styles.description}>
              <p>
                Soy Maxi, Me gusta crear soluciones digitales claras,
                funcionales y bien pensadas, desde la interfaz hasta la lógica
                que las hace funcionar.
              </p>

              <p>
                Trabajo en proyectos reales y propios, buscando que cada
                producto resuelva una necesidad concreta y tenga una
                experiencia simple para quien lo usa.
              </p>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visual} aria-hidden="true">
              <div className={styles.visualGlow} />

              <img
                src={aboutVisual}
                alt=""
                className={styles.visualImage}
                 draggable={false}
              />
            </div>
          </div>
        </div>

        <div className={styles.technologies}>
          <div className={styles.techHeader}>
            <span>Tecnologías principales</span>
            <div />
          </div>

          <ul className={styles.techList}>
            {technologies.map(({ name, icon: Icon }) => (
              <li key={name} className={styles.techItem}>
                <Icon className={styles.techIcon} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;