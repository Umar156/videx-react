import React from "react";
import "../assets/styling/home.scss";
import {
  faCircleQuestion,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenButton from "./GenButton";

const FormField = ({ section }) => {
  return (
    <div className="row mt-4 p-0 mx-0 main-section-info">
      <div className="d-flex section-wizard-btn  p-2 main-section-bg">
        <h3 className="section-font">
          <span className="me-1">
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
          {section.section}
        </h3>
        <GenButton name={"Start wizard"} icon={faCircleQuestion} />
      </div>
      <div className="p-3">
        {section.subSection.map((subSection, subSectionIndex) => (
          <div
            key={"subsection" + subSectionIndex}
            className="sub-section mt-3"
          >
            <h4 className="sub-section-bg">{subSection.title}</h4>
            <div className="row px-3 pb-3">
              {subSection.fields.map((field, fieldIndex) => (
                <div className="col-lg-4" key={"field" + fieldIndex}>
                  <label className="my-2">{field.label}</label>
                  <input type={field.type} className="form-control" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormField;
