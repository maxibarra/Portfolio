import { ExternalLink } from 'lucide-react';

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import carpinteriaImage from '../../assets/projects/carpinteria-card.png';
import rutaBusImage from '../../assets/hero/rutabus-hero.png';
import portfolioImage from '../../assets/projects/portfolio-card.png';

import { projects } from '../../data/projects';

import styles from './Projects.module.css';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const images = {
  carpinteria: carpinteriaImage,
  rutabus: rutaBusImage,
  portfolio: portfolioImage,
};

const technologyIcons = {
  HTML: {
    Icon: SiHtml5,
    color: '#e34f26',
  },
  CSS: {
    Icon: SiCss,
    color: '#1572b6',
  },
  JavaScript: {
    Icon: SiJavascript,
    color: '#f7df1e',
  },
  React: {
    Icon: SiReact,
    color: '#61dafb',
  },
  TypeScript: {
    Icon: SiTypescript,
    color: '#3178c6',
  },
  Vite: {
    Icon: SiVite,
    color: '#646CFF',
  },
};

<ExternalLink size={23} />

function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const projects = projectsRef.current;

      if (!projects) return;

      const media = gsap.matchMedia();

      media.add(
        '(prefers-reduced-motion: no-preference)',
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: projects,
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
              `.${styles.intro}`,
              {
                y: 25,
                opacity: 0,
                duration: 0.65,
              },
              '-=0.45',
            )
            .from(
              `.${styles.card}`,
              {
                y: 55,
                opacity: 0,
                scale: 0.98,
                duration: 0.75,
                stagger: 0.14,
              },
              '-=0.25',
            );
        },
      );

      return () => media.revert();
    },
    { scope: projectsRef },
  );

  return (
    <section ref={projectsRef} id="proyectos" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              Proyectos destacados
            </span>

            <h2 className={styles.title}>
              Proyectos reales,
              <br />
              soluciones<span> bien pensadas.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Cada proyecto combina diseño, desarrollo y experiencia de usuario para resolver necesidades reales con claridad, eficiencia y propósito.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => {
            const image = project.image
              ? images[project.image as keyof typeof images]
              : null;

            return (
              <article
                key={project.title}
                className={styles.card}
              >
                <div className={styles.preview}>
                  {image ? (
                    <img
                      src={image}
                      alt={`Vista previa de ${project.title}`}
                    />
                  ) : (
                    <div className={styles.portfolioPlaceholder}>
                      <span>MI</span>
                      <small>Portfolio en desarrollo</small>
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>

                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.cardFooter}>
                    <ul className={styles.technologies}>
                      {project.technologies.map((technology) => {
                        const technologyData =
                          technologyIcons[
                          technology as keyof typeof technologyIcons
                          ];

                        const Icon = technologyData?.Icon;

                        return (
                          <li key={technology}>
                            {Icon && (
                              <Icon
                                style={{ color: technologyData.color }}
                              />
                            )}

                            <span>{technology}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <a
                      href={project.url}
                      target={
                        project.url.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        project.url.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className={styles.projectLink}
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      <span>Ver proyecto</span>
                      <ExternalLink size={19} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;