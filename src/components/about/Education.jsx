import React from "react";

const educationContent = [
  {
    year: "6 mois",
    degree: "BOOTCAMP DEV",
    institute: "The hacking project",
    details: `6 mois de formation intensive où j'ai appris durant les 3 premiers mois les langages HTML, CSS, des bases de Javascript, et à utiliser le framework RUBY ON RAILS.
    Pendant les 3 mois suivants, l'accent a été mis sur le frontend et j'ai appris à utiliser la bibliothèque REACT JS.`,
  },
  {
    year: "1 an",
    degree: "Licence professionnelle",
    institute: "université JOSEPH FOURRIER, Grenoble(38)",
    details: `Génie climatique, spécialité froid et conditionnement d'air.`,
  },
  {
    year: "2 ans",
    degree: "DUT",
    institute: "université JOSEPH FOURRIER, Grenoble(38)",
    details: `Génie thermique et énergie.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
