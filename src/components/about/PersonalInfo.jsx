import React from "react";

const personalInfoContent = [
  { meta: "prénom", metaInfo: "Guillaume", hasColor: "" },
  { meta: "Nom", metaInfo: "BERTHOLET", hasColor: "" },
  { meta: "Âge", metaInfo: "30 ans", hasColor: "" },
  { meta: "Nationalité", metaInfo: "Français", hasColor: "" },
  { meta: "Ville", metaInfo: "LYON (69)", hasColor: "" },
  { meta: "téléphone", metaInfo: "+33 6 13 30 50 35", hasColor: "" },
  { meta: "E-mail", metaInfo: "bertholetguillaume@gmail.com", hasColor: "" },
  { meta: "langues", metaInfo: "Français, Anglais", hasColor: "" },
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
