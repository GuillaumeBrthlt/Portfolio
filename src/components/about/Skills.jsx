import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "HTML" },
  { skillClass: "p55", skillPercent: "55", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p69", skillPercent: "69", skillName: "RUBY" },
  { skillClass: "p71", skillPercent: "71", skillName: "RAILS" },
  { skillClass: "p36", skillPercent: "36", skillName: "SQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "GITHUB" },
  { skillClass: "p65", skillPercent: "65", skillName: "REACT JS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
