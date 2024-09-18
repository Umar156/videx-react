import React, { useState, forwardRef } from "react";
import "../assets/styling/home.scss";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenButton from "./GenButton";

const FormField = forwardRef(({ section }, ref) => {
  const FieldKeyValue = section.subSection.reduce((acc, subSection) => {
    subSection.fields.forEach((field) => {
      if (!acc[field.key]) {
        acc[field.key] = "";
      }
    });
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(FieldKeyValue);

  const handleInputChange = (e, key) => {
    setFormValues({ ...formValues, [key]: e.target.value });
  };

  const SubmitData = () => {
    const dataToStore = {
      sectionTitle: section.section,
      subSections: section.subSection.map((subSection) => ({
        subSectionTitle: subSection.title,
        fields: subSection.fields.map((field) => ({
          label: field.label,
          value: formValues[field.key],
        })),
      })),
    };

    localStorage.setItem("formData", JSON.stringify(dataToStore));
  };
  return (
    <>
      <div className="row mt-4 p-0 mx-0 main-section-info" ref={ref}>
        <div className="d-flex section-wizard-btn  p-2 main-section-bg">
          <h3 className="section-font">
            <span className="me-1">
              <FontAwesomeIcon icon={section.icon} />
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
              <h4 className="sub-section-bg">{subSection.title} </h4>
              <div className="row px-3 pb-3">
                {subSection.fields.map((field, fieldIndex) => (
                  <div className="col-lg-4" key={"field" + fieldIndex}>
                    <label className="my-2">{field.label}</label>
                    <input
                      type={field.type}
                      className="form-control"
                      value={formValues[field.key]}
                      onChange={(e) => handleInputChange(e, field.key)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-primary mt-3 px-5" onClick={SubmitData}>
        Save
      </button>
    </>
  );
});

export default FormField;
