import React from "react";

const experienceContent = [
  {
    year: "   2018 - 2021",
    position: " National Sales Manager",
    compnayName: "Carel France",
    details: `I was in charge of developping the business with wholsalers in France, Belgium and Luxembourg.`,
  },
  {
    year: "2017 - 2018",
    position: " technical sales representative",
    compnayName: "LE FROID PECOMARK",
    details: `I was in charge of customer service, design and sizing of refrigeration systems, and technical assistance `,
  },
  {
    year: "2012 - 2017",
    position: "technician",
    compnayName: "Axima refrigération",
    details: `I did the set up on industrial refrigeration systems. I also accompanied the project managers on studies, 
    sizing, purchasing and monitoring of subcontractors.`,
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
