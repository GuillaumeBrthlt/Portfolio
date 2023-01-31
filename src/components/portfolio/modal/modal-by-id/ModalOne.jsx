import Image from 'next/image';
import React from 'react';
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';

const ModalOne = ({modalId,setGetModal}) => {
  return (
    <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Projet:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Langages :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p>Description:</p> 
                  <p>
                    Le but de ce site WEB est de répertorier tous les jeux vidéos au courant de l&apos;année 2023.
                    Les informations sont collectées en utilisant la version gratuite de l&apos;API RAWG.
                    <br></br>
                    Plusieurs fonctionnalités ont été intégrées telles que la recherche par nom de jeux ou le filtre par platforme.
                    Il est également possible de cliquer sur le nom d&apos;un jeu pour en connaître les détails.
                  </p>

                </div>
                <figure className="modal__img mb-4">
                  <Image src={item.image} alt="portfolio project demo" />
                </figure>
                <figure className="modal__img mb-4">
                  <Image src={item.image_2} alt="portfolio project demo" />
                </figure>
                <figure className="modal__img mb-4">
                  <Image src={item.image_3} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <Image src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ModalOne;