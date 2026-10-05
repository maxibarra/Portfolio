import { ExternalLink } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { FiClock } from 'react-icons/fi';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import styles from './Contact.module.css';

function Contact() {
  const contactRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const contact = contactRef.current;

      if (!contact) return;

      const media = gsap.matchMedia();

      media.add(
        '(prefers-reduced-motion: no-preference)',
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: contact,
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
                y: 40,
                opacity: 0,
                duration: 0.75,
              },
              '-=0.25',
            )
            .from(
              `.${styles.description}`,
              {
                y: 22,
                opacity: 0,
                duration: 0.6,
              },
              '-=0.4',
            )
            .from(
              `.${styles.cards}`,
              {
                y: 32,
                opacity: 0,
                duration: 0.65,
                stagger: 0.12,
              },
              '-=0.3',
            )
            .from(
              `.${styles.responseTime}`,
              {
                y: 14,
                opacity: 0,
                duration: 0.45,
              },
              '-=0.2',
            );
        },
      );

      return () => media.revert();
    },
    { scope: contactRef },
  );

  return (
    <section ref={contactRef} id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              Contacto
            </span>

            <h2 className={styles.title}>
              ¿Tenés un proyecto
              en mente? <span>Hablemos.</span>
            </h2>

            <p className={styles.description}>
              Contame qué necesitás, charlamos las opciones y vemos cómo llevar tu idea a un proyecto concreto. Escribime por WhatsApp o conectemos en LinkedIn.
            </p>
          </div>

          <div className={styles.options}>
            <div className={styles.cards}>
              <article className={styles.card}>
                <div className={styles.iconCircle}>
                  <SiWhatsapp />
                </div>

                <h3>WhatsApp</h3>

                <p>
                  Escribime directamente y
                  <br />
                  conversemos sobre tu proyecto.
                </p>

                <a
                  href="https://wa.me/5491139476425?text=Hola%20Maxi%2C%20vengo%20desde%20tu%20portfolio%20y%20quer%C3%ADa%20hacerte%20una%20consulta."
                  target="_blank"
                  rel="noreferrer"
                  className={styles.action}
                >
                  <span className={styles.actionContent}>
                    <SiWhatsapp />
                    Abrir WhatsApp
                  </span>

                  <ExternalLink size={19} />
                </a>
              </article>

              <article className={styles.card}>
                <div className={styles.iconCircle}>
                  <FaLinkedinIn />
                </div>

                <h3>LinkedIn</h3>

                <p>
                  Conectemos y veamos cómo
                  <br />
                  puedo ayudarte.
                </p>

                <a
                  href="https://linkedin.com/in/maximiliano-ibarra"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.action}
                >
                  <span className={styles.actionContent}>
                    <FaLinkedinIn />
                    Ver perfil en LinkedIn
                  </span>

                  <ExternalLink size={19} />
                </a>
              </article>
            </div>
            <div className={styles.responseTime}>
              <div className={styles.responseIcon}>
                <FiClock />
              </div>

              <div>
                <span>Tiempo de respuesta</span>
                <p>Suelo responder en menos de 24 horas.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;