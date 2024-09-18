import React from "react";
import "../assets/styling/home.scss";

const SectionBar = ({ sections, onClick }) => {
  return (
    <div className="row mt-3 sticky-bars">
      {sections.map((section, sectionIndex) => (
        <div
          className="col-md-2 main-section"
          key={"section-bars" + sectionIndex}
          onClick={() => onClick(section.title)}
        >
          <p className="form-sections">{section.title}</p>
          <div className="section-bars"></div>
        </div>
      ))}
    </div>
  );
};

export default SectionBar;
