import React, { useRef } from "react";
import logo from "../assets/images/logo.svg";
import sideImage from "../assets/images/sideImage.jpg";
import "../assets/styling/home.scss";
import GetDataButton from "../components/GetDataButton";
import Dropdown from "react-bootstrap/Dropdown";
import { dataFiles, formData, sectionInfo } from "../constants";
import SectionBar from "../components/SectionBar";
import FormField from "../components/FormField";

const Home = () => {
  const refs = useRef(
    formData.reduce((acc, value) => {
      acc[value.section] = React.createRef();
      return acc;
    }, {})
  );

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
        />
      ))}
    </div>
  );
};

export default Home;
