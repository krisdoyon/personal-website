import React, { useEffect, useRef } from "react";
import sprite from "../../src/img/sprite.svg";
import { useGlobalContext } from "../context/context";

const Skills = () => {
  const { addSectionObserver } = useGlobalContext();
  const containerRef = useRef();

  useEffect(() => {
    addSectionObserver(containerRef);
  }, [addSectionObserver]);
  return (
    <section className="section section-skills" id="skills">
      <div className="container container-preload" ref={containerRef}>
        <h2 className="heading-secondary">Skills</h2>
        <p className="skills-text">
          I have experience working with the following technologies:
        </p>
        <div className="skills-grid">
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-html5`}></use>
            </svg>
            <h3 className="skill__label">HTML</h3>
          </div>
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-css3`}></use>
            </svg>
            <h3 className="skill__label">CSS</h3>
          </div>
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-javascript`}></use>
            </svg>
            <h3 className="skill__label">Javascript</h3>
          </div>
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-sass`}></use>
            </svg>
            <h3 className="skill__label">Sass</h3>
          </div>
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-git`}></use>
            </svg>
            <h3 className="skill__label">Git</h3>
          </div>
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-npm`}></use>
            </svg>
            <h3 className="skill__label">npm</h3>
          </div>
        </div>
        <p className="skills-text">Currently I'm learning:</p>
        <div className="skills-grid">
          <div className="skill">
            <svg className="skill__icon">
              <use href={`${sprite}#icon-react`}></use>
            </svg>
            <h3 className="skill__label">React</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;