import styles from "./Hero.module.scss";
import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../context/context";

const Hero = () => {
  const { headerRef, stickyNav, setStickyNav } = useGlobalContext();
  const sectionRef = useRef();

  useEffect(() => {
    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) setStickyNav(true);
      else setStickyNav(false);
    };
    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${headerRef.current.getBoundingClientRect().height}px`,
    });
    observer.observe(sectionRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef]);

  return (
    <section
      className={`${styles.wrapper} ${stickyNav ? styles.sticky : ""}`}
      ref={sectionRef}
    >
      <h1 className={styles.heading}>
        <span>
          Hi, I'm <br className={styles.break} />
          <strong>Kris Doyon.</strong>
        </span>
        <span>
          I'm a frontend <br className={styles.break} />
          software developer.
        </span>
      </h1>
    </section>
  );
};

export default Hero;
