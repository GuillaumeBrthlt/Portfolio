import Image from 'next/image';
import React from 'react';
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';

const ModalFour = ({ modalId, setGetModal }) => {
  return (
    <div className="modal_portfolio">
      <div
        className="modal__outside"
        onClick={() => setGetModal(false)}
      ></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          //
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Project:{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Language :{" "}
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
                  Kwot-z est un projet personnel que j'ai développé dans le but de soulager la charge administrative des professionnels de la réfrigération et de la climatisation.
                  <br/>
                  Cette application à pour but de faciliter le process de demandes de prix et de dimensionnement des frigoristes auprès de leurs fournisseurs via des formulaires simplifiés.
                  <br/><br/>
                  Le back-end à été réalisé sur Ruby on Rails et le front-end sur Reactjs. Les mails sont evoyés avec mailjet et les devis sont stockés sur AWS.
                </p>
              </div>
              <figure className="modal__img mb-4">
                <div>
                  <Image src={item.image} alt="portfolio project demo" />
                </div>
              </figure>
              <figure className="modal__img mb-4">
                <div>
                  <Image src={item.image_2} alt="portfolio project demo" />
                </div>
              </figure>
              <figure className="modal__img mb-4">
                <div>
                  <Image src={item.image_3} alt="portfolio project demo" />
                </div>
              </figure>
              <figure className="modal__img mb-4">
                <div>
                  <Image src={item.image_4} alt="portfolio project demo" />
                </div>
              </figure>
              <figure className="modal__img">
                <div>
                  <Image src={item.image_5} alt="portfolio project demo" />
                </div>
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

export default ModalFour;