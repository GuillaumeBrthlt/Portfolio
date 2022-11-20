import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Guillaume", hasColor: "" },
  { meta: "last name", metaInfo: "BERTHOLET", hasColor: "" },
  { meta: "Age", metaInfo: "30 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "French", hasColor: "" },
  { meta: "City", metaInfo: "Saint-Priest (69)", hasColor: "" },
  { meta: "phone", metaInfo: "+33 6 13 30 50 35", hasColor: "" },
  { meta: "Email", metaInfo: "bertholetguillaume@gmail.com", hasColor: "" },
  { meta: "langages", metaInfo: "French, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
