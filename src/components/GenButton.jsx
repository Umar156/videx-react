import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import "../assets/styling/home.scss";

const GenButton = ({ name, icon }) => {
  return (
    <div>
      <Button className="wizard-btn">
        <span>
          <span className="me-1">
            <FontAwesomeIcon icon={icon} />
          </span>
        </span>
        {name}
      </Button>
    </div>
  );
};

export default GenButton;
