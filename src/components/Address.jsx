import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">localisation</span>Lyon (69), FRANCE.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">adresse e-mail</span>{" "}
        <a href="mailto:bertholetguillaume@gmail.com">bertholetguillaume@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">téléphone</span>{" "}
        <a href="Tel: +336 13 305 035">+33 6 13 30 50 35</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
