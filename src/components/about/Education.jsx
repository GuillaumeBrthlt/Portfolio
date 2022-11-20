import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "BOOTCAMP DEV",
    institute: "The hacking project",
    details: `6 months bootcamp where I learned for the first 3 months to code in HTML, CSS, bases of Javascript, and to use the framework RUBY ON RAILS.
    During the next 3 months, the focus was put on frontend and I learned how to use the library REACT JS.`,
  },
  {
    year: "2013",
    degree: "BACHELOR DEGREE",
    institute: "JOSEPH FOURRIER UNIVERSITY, Grenoble(38)",
    details: `Climatic engineering, specializing in refrigeration and air conditioning`,
  },
  {
    year: "2012",
    degree: "BACHELOR DEGREE ",
    institute: "JOSEPH FOURRIER UNIVERSITY, Grenoble(38)",
    details: `Speciality thermal and energy engineering`,
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
