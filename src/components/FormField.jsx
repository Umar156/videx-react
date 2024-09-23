import React, { forwardRef } from "react";
import "../assets/styling/home.scss";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenButton from "./GenButton";

const FormField = forwardRef(
  ({ section, formValues, handleInputChange, error }, ref) => {
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
              <div key={subSectionIndex} className="sub-section mt-3">
                <h4 className="sub-section-bg">{subSection.title}</h4>
                <div className="row px-3 pb-3">
                  {subSection.fields.map((field, fieldIndex) => {
                    const isBold = field.label.includes("*");
                    const hasError = error && error[field.key];
                    return (
                      <div className="col-lg-4" key={fieldIndex}>
                        <label
                          className={`my-2 ${isBold ? "font-weight-bold" : ""}`}
                        >
                          {field.label}
                        </label>

                        {field.type === "select" ? (
                          <select
                            name={field.key}
                            value={formValues[field.key]}
                            onChange={(e) =>
                              handleInputChange(e, field.key, section.section)
                            }
                            className={`form-control remove-outline ${
                              hasError ? "error-border" : ""
                            }`}
                          >
                            {field.options.map((option, optionIndex) => (
                              <option key={optionIndex} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            className={`form-control remove-outline ${
                              hasError ? "error-border" : ""
                            }`}
                            value={formValues[field.key]}
                            onChange={(e) =>
                              handleInputChange(e, field.key, section.section)
                            }
                          />
                        )}
                        {hasError && (
                          <div className="text-danger mt-1">
                            {error[field.key]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
);

export default FormField;
