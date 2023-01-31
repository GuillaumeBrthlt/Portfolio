import React from "react";

const experienceContent = [
  {
    year: "Actuellement",
    position: "Developpeur FULLSTACK",
    compnayName: "A mon compte",
    details: `Réalisation de sites et applications WEB -- Ruby on Rails / React JS.`,
  },
  {
    year: "3 ans",
    position: "Responsable national des ventes",
    compnayName: "Carel France",
    details: `Responsabilité commerciale des secteurs France, Belgique et Luxembourg.`,
  },
  {
    year: "18 mois",
    position: "technico-commercial",
    compnayName: "LE FROID PECOMARK",
    details: `Étude et conception, service client, chiffrage.`,
  },
  {
    year: "5 ans",
    position: "Metteur au point",
    compnayName: "Axima refrigération",
    details: `Mise en route d'installations de réfrigération industrielle, études et suivi de chantier.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
