import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";

const Section = ({ children, className, id }) => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const { activeSection, setActiveSection } = useGlobalContext();

  useEffect(() => {
    const revealContainer = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("container-preload");
      observer.unobserve(entry.target);
    };
    const observer = new IntersectionObserver(revealContainer, {
      root: null,
      threshold: 0.15,
    });
    observer.observe(containerRef.current);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(min-width:1000px)").matches) return;
    const handleIntersection = function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
      if (activeSection === entry.target.id && !entry.isIntersecting) {
        setActiveSection(null);
      }
    };
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0% -50% 0%",
    });
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [activeSection, setActiveSection]);

  return (
    <section className={`section ${className}`} id={id} ref={sectionRef}>
      <div className="container container-preload" ref={containerRef}>
        {children}
      </div>
    </section>
  );
};

export default Section;
