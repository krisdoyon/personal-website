import React from "react";
import { useGlobalContext } from "../context/context";

const Modal = () => {
  const {
    closeModal,
    modalProject: { title, modalText, imgSrc, imgAlt, gitLink, siteLink },
  } = useGlobalContext();
  return (
    <>
      <div className="modal">
        <button className="modal__close-btn" onClick={closeModal}>
          &times;
        </button>

        <div className="modal__img-box">
          <img className="modal__img" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="modal__info-box">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__text">{modalText}</p>
          <div className="project__btn-box">
            <a
              className="btn btn--blue modal__git-btn"
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              className="btn btn--blue modal__site-btn"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </a>
          </div>
        </div>
      </div>
      <div className="modal__overlay" onClick={closeModal}></div>
    </>
  );
};

export default Modal;
