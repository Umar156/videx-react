import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import "../assets/styling/home.scss";

const ButtonModal = ({ columns }) => {
  return (
    <div className="row mt-3">
      {columns.map((column, columnIndex) => (
        <Button
          key={"column-head" + columnIndex}
          className="btn-data  col-lg-3 mt-1 ms-lg-3"
        >
          <span className="rounded-icon">
            <FontAwesomeIcon
              key={"column-icon" + columnIndex}
              icon={column.icon}
              className="custom-icon"
            />
          </span>
          {column.title}
        </Button>
      ))}
    </div>
  );
};

export default ButtonModal;
