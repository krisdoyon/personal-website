import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";

const Hero = () => {
  const { headerRef } = useGlobalContext();
  const sectionRef = useRef();

  useEffect(() => {
    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) document.body.classList.add("sticky");
      else document.body.classList.remove("sticky");
    };
    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${headerRef.current.getBoundingClientRect().height}px`,
    });
    observer.observe(sectionRef.current);
  }, [headerRef]);

  return (
    <section className="section-hero" ref={sectionRef}>
      <h1 className="heading-primary">
        <span>
          Hi, I'm <br className="heading-primary__br-1" />
          <strong>Kris Doyon.</strong>
        </span>
        <span>
          I'm a frontend <br className="heading-primary__br-2" />
          software developer.
        </span>
      </h1>
    </section>
  );
};

export default Hero;
