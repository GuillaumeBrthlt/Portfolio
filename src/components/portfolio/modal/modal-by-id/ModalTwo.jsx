import Image from 'next/image';
import React from 'react';
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';

const ModalTwo = ({modalId,setGetModal}) => {
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
                    The project was the final project of the first 3 months of the bootcamp &quot;the hacking project&quot;.
                    It was using the framework Ruby on Rails and was initially deployed on heroku.
                    <br />
                    The goal of this web app was to create a link between amateur musicians and venues like restaurants, bars, hotels, ...
                    who would like to host a show.
                    <br />
                    You will find more details on the repository.
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
                <figure className="modal__img mb-4">
                  <Image src={item.image_4} alt="portfolio project demo" />
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

export default ModalTwo;