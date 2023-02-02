// external
import Image from 'next/image';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// internal
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';

const ModalThree = ({modalId,setGetModal}) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
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
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p>Description:</p> 
                  <p>
                    Site e-commerce initialement créé pour de la vente de café et de machine à torréfier.
                    Intégration paypal et stripe pour la gestion des paiements par carte bancaire.
                    <br/>
                    Ce site web à été fermé et n&apos;est plus consultable aujourd&apos;hui.
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

export default ModalThree;