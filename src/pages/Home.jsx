import React, { useState, useRef } from "react";
import logo from "../assets/images/logo.svg";
import sideImage from "../assets/images/sideImage.jpg";
import "../assets/styling/home.scss";
import GetDataButton from "../components/GetDataButton";
import Dropdown from "react-bootstrap/Dropdown";
import { dataFiles, formData, sectionInfo } from "../constants";
import SectionBar from "../components/SectionBar";
import FormField from "../components/FormField";

const Home = () => {
  const [allFormValues, setAllFormValues] = useState(() =>
    formData.reduce((acc, section) => {
      acc[section.section] = section.subSection.reduce((subAcc, subSection) => {
        subSection.fields.forEach((field) => {
          subAcc[field.key] = "";
        });
        return subAcc;
      }, {});
      return acc;
    }, {})
  );

  const refs = useRef(
    formData.reduce((acc, section) => {
      acc[section.section] = React.createRef();
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});

  const validateField = (key, value) => {
    if (value.trim() === "") {
      return "This field is required.";
    }
    switch (key) {
      case "surname":
      case "previous-member":
      case "first-name":
      case "pob":
      case "cob":
      case "gender":
      case "ms":
      case "current-nationality":
        const dataRegex = /^[a-zA-Z\s]*$/;
        if (!dataRegex.test(value)) {
          return "English alphabet only.";
        }
        break;
      case "dob":
        if (value.length === 10) {
          return null;
        }
        const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dobRegex.test(value)) {
          return "Invalid date format. Please use DD/MM/YYYY.";
        }
        break;
      default:
        break;
    }
    return null;
  };

  const handleInputChange = (e, key, section) => {
    const value = e.target.value;

    const error = validateField(key, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [section]: {
        ...prevErrors[section],
        [key]: error,
      },
    }));

    setAllFormValues((prevValues) => ({
      ...prevValues,
      [section]: {
        ...prevValues[section],
        [key]: value,
      },
    }));
  };

  const handleSave = () => {
    const newErrors = {};
    formData.forEach((section) => {
      section.subSection.forEach((subSection) => {
        subSection.fields.forEach((field) => {
          if (!newErrors[section.section]) {
            const error = validateField(
              field.key,
              allFormValues[section.section][field.key]
            );
            if (error) {
              if (!newErrors[section.section]) {
                newErrors[section.section] = {};
              }
              newErrors[section.section][field.key] = error;
            }
          }
        });
      });
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem("formData", JSON.stringify(allFormValues));
    }
  };

  const handleClick = (section) => {
    refs.current[section].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container bg-white p-3">
      <div className="row">
        <div className="col-md-4">
          <img src={logo} alt="Logo"></img>
          <h1 className="home-logo">VIDEX</h1>
          <p>Long-term stay</p>
          <Dropdown className="pb-3">
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="border"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Urdu</Dropdown.Item>
              <Dropdown.Item>Arabic</Dropdown.Item>
              <Dropdown.Item>Hindi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-8 h-50">
          <img src={sideImage} alt="Image" className="header-image"></img>
          <GetDataButton columns={dataFiles} />
        </div>
      </div>
      <SectionBar sections={sectionInfo} onClick={handleClick} />
      {formData.map((section, index) => (
        <FormField
          section={section}
          key={index}
          ref={refs.current[section.section]}
          formValues={allFormValues[section.section]}
          handleInputChange={handleInputChange}
          error={errors[section.section]}
        />
      ))}
      <button
        className="btn btn-primary mt-3 px-5 save-btn"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Home;
