import styles from './Hero.module.css';
import heroBackground from '../../assets/hero/hero-background.png';
import carpinteriaHero from '../../assets/hero/carpinteria-hero.png';
import rutabusHero from '../../assets/hero/rutabus-hero.png';
import laptopFrame from '../../assets/hero/laptop-hero.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';




gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // 3D con mouse
    const hero = heroRef.current;
    const visual = visualRef.current;
    const background = backgroundRef.current;

    if (!hero || !visual || !background) return;

    const media = gsap.matchMedia();

    media.add(
      '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
      () => {
        const visualX = gsap.quickTo(visual, 'x', {
          duration: 0.8,
          ease: 'power3.out',
        });

        const visualY = gsap.quickTo(visual, 'y', {
          duration: 0.8,
          ease: 'power3.out',
        });

        const visualRotateX = gsap.quickTo(visual, 'rotationX', {
          duration: 0.8,
          ease: 'power3.out',
        });

        const visualRotateY = gsap.quickTo(visual, 'rotationY', {
          duration: 0.8,
          ease: 'power3.out',
        });

        const backgroundX = gsap.quickTo(background, 'x', {
          duration: 1.2,
          ease: 'power3.out',
        });

        const backgroundY = gsap.quickTo(background, 'y', {
          duration: 1.2,
          ease: 'power3.out',
        });

        const handlePointerMove = (event: PointerEvent) => {
          const rect = hero.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) / rect.width - 0.5;

          const y =
            (event.clientY - rect.top) / rect.height - 0.5;

          const isUltrawide = window.innerWidth >= 1800;

          const moveX = isUltrawide ? 50 : 30;
          const moveY = isUltrawide ? 28 : 18;

          const rotateY = isUltrawide ? 6 : 4;
          const rotateX = isUltrawide ? 4 : 3;

          const bgX = isUltrawide ? 28 : 18;
          const bgY = isUltrawide ? 16 : 10;

          visualX(x * moveX);
          visualY(y * moveY);

          visualRotateY(x * rotateY);
          visualRotateX(-y * rotateX);

          backgroundX(-x * bgX);
          backgroundY(-y * bgY);
        };

        const resetScene = () => {
          visualX(0);
          visualY(0);

          visualRotateX(0);
          visualRotateY(0);

          backgroundX(0);
          backgroundY(0);
        };

        hero.addEventListener('pointermove', handlePointerMove);
        hero.addEventListener('pointerleave', resetScene);

        return () => {
          hero.removeEventListener(
            'pointermove',
            handlePointerMove,
          );

          hero.removeEventListener(
            'pointerleave',
            resetScene,
          );
        };
      },
    );

    return () => media.revert();
  }, { scope: heroRef });


  useGSAP(() => {
    // parallax con scroll
    const hero = heroRef.current;
    const visual = visualRef.current;
    const background = backgroundRef.current;

    if (!hero || !visual || !background) return;

    const media = gsap.matchMedia();

    media.add(
      '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
      () => {
        gsap.to(background, {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(visual, {
          yPercent: -4,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      },
    );

    return () => media.revert();
  }, { scope: heroRef });

  useGSAP(() => {
    // animación de entrada del Hero
    const hero = heroRef.current;
    const visual = visualRef.current;

    if (!hero || !visual) return;

    const media = gsap.matchMedia();

    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        });

        tl.from(`.${styles.title}`, {
          y: 60,
          opacity: 0,
          duration: 0.9,
        })
          .from(
            `.${styles.role}`,
            {
              y: 24,
              opacity: 0,
              duration: 0.6,
            },
            '-=0.45',
          )
          .from(
            `.${styles.description}`,
            {
              y: 24,
              opacity: 0,
              duration: 0.6,
            },
            '-=0.35',
          )
          .from(
            `.${styles.actions}`,
            {
              y: 20,
              opacity: 0,
              duration: 0.55,
            },
            '-=0.3',
          )
          .from(
            visual,
            {
              x: 70,
              opacity: 0,
              duration: 1,
            },
            '-=0.85',
          );
      },
    );

    return () => media.revert();
  }, { scope: heroRef });

  return (
    <section id="inicio" className={styles.hero} ref={heroRef}>
      <div className={styles.background} aria-hidden="true">
        <img
          ref={backgroundRef}
          src={heroBackground}
          alt=""
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay} />

        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Maximiliano</span>
            <span className={styles.titleAccent}>Ibarra</span>
          </h1>

          <p className={styles.role}>Software Developer</p>

          <p className={styles.description}>
            Desarrollo software, experiencias web y productos digitales que
            resuelven necesidades reales.
          </p>

          <div className={styles.actions}>
            <a href="#proyectos" className={styles.primaryButton}>
              Ver proyectos
              <span>→</span>
            </a>

            <a href="#contacto" className={styles.secondaryButton}>
              Hablemos
              <span>→</span>
            </a>
          </div>
        </div>

        <div ref={visualRef} className={styles.visual} aria-hidden="true">
          <div className={styles.routePanel}>
            <img
              src={rutabusHero}
              alt="Vista previa del sitio Ruta Bus"
              draggable={false}
            />
          </div>

          <div className={styles.laptop}>
            <div className={styles.laptopMockup}>
              <div className={styles.laptopDisplay}>
                <img
                  src={carpinteriaHero}
                  alt="Vista previa del sitio Carpintería Max"
                  draggable={false}
                />
              </div>

              <img
                src={laptopFrame}
                alt=""
                aria-hidden="true"
                className={styles.laptopFrame}
                draggable={false}
              />
            </div>
          </div>
        </div>

        <a href="#sobre-mi" className={styles.scrollIndicator}>
          <span>Scroll</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;