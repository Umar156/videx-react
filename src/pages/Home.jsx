import React from "react";
import logo from "../assets/images/logo.svg";
import sideImage from "../assets/images/sideImage.jpg";
import "../assets/styling/home.scss";
import ButtonModal from "../components/ButtonModal";
import Dropdown from "react-bootstrap/Dropdown";
import { DATA_FILES, SECTION_INFO } from "../constants";
import SectionBar from "../components/SectionBar";

const Home = () => {
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
          <ButtonModal columns={DATA_FILES} />
        </div>
      </div>
      <SectionBar sections={SECTION_INFO} />
    </div>
  );
};

export default Home;
