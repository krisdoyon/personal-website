import React from "react";
import headshot from "../../src/img/headshot.webp";
import Section from "./Section";

const About = () => {
  return (
    <Section className="section-about" id="about">
      <div className="about">
        <div className="about__text-box">
          <h2 className="heading-secondary">About</h2>
          <p className="about__text">
            I'm a self taught software developer who enjoys problem solving and
            learning new technologies. Since transitioning out of my job as a
            high school science teacher I have been teaching myself to code full
            time with a focus in front-end web development.
          </p>
        </div>
        <img
          className="about__img"
          src={headshot}
          alt="Headshot of Kris Doyon"
        />
      </div>
    </Section>
  );
};

export default About;
