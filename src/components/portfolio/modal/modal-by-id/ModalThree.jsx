// external
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// internal
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from '../../portfolioData';
import img1 from "../../../../../public/assets/img/portfolio/project-1.jpg";
import img2 from "../../../../../public/assets/img/portfolio/project-2.jpg";

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
                    The project was a project realized during the first 3 months of the bootcamp &quot;the hacking project&quot;.
                    It was using the framework Ruby on Rails and was initially deployed on heroku.
                    <br />
                    This website represent a cat images e-shop on which we connected the stripe API.
                    <br />
                    You will find more details on the repository.
                  </p>
                </div>
                <figure className="modal__img">
                    <div>
                      <Image src={item.image} alt="portfolio project demo" />
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