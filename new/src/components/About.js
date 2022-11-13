import React, { useEffect, useRef } from "react";
import headshot from "../../src/img/headshot.webp";
import { useGlobalContext } from "../context/context";

const About = () => {
  const { addSectionObserver } = useGlobalContext();
  const containerRef = useRef();

  useEffect(() => {
    addSectionObserver(containerRef);
  }, []);

  return (
    <section className="section section-about" id="about">
      <div
        className="container container-about container-preload"
        ref={containerRef}
      >
        <div className="about">
          <div className="about__text-box">
            <h2 className="heading-secondary">About</h2>
            <p className="about__text">
              I'm a self taught software developer who enjoys problem solving
              and learning new technologies. Since transitioning out of my job
              as a high school science teacher I have been teaching myself to
              code full time with a focus in front-end web development.
            </p>
          </div>
          <img
            className="about__img"
            src={headshot}
            alt="Headshot of Kris Doyon"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
