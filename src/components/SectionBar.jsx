import React from "react";
import "../assets/styling/home.scss";

const SectionBar = ({ sections }) => {
  return (
    <div className="row mt-3">
      {sections.map((section, sectionIndex) => (
        <div
          className="col-md-2 main-section"
          key={"section-bars" + sectionIndex}
        >
          <p className="form-sections">{section.title}</p>
          <div className="section-bars"></div>
        </div>
      ))}
    </div>
  );
};

export default SectionBar;
