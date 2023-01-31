import Image from 'next/image';
import React from 'react';
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';

const ModalFive = ({modalId,setGetModal}) => {
  return (
    <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
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
                          Langage :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Frameworks / librairies :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.framework}
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
                    Ce projet est un MVP de site d&apos;agence immobilière.
                    Le framework Ruby on Rails à été utilisé sur le back-end et la librairie React JS sur le front-end.
                    <br /><br />
                    Il s&apos;agit d&apos;un site d&apos;annonces immobilières ou le acheteurs peuvent entrer en contact directement avec les propriétaires sous la condition d&apos;y être connecté.
                    Après inscription, il est possible de contacter un vendeur ou créer, modifier, supprimer une annonce.
                  </p>

                </div>
                <figure className="modal__img mb-4">
                  <Image src={item.image_2} alt="portfolio project demo" />
                </figure>
                <figure className="modal__img mb-4">
                  <Image src={item.image} alt="portfolio project demo" />
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

export default ModalFive;