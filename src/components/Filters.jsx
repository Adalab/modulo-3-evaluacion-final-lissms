import React from "react";
import "../app.scss";
import "./Filter.scss";
import image from "../images/Rick_and_Morty_-_logo_(English).png";
import PropTypes from "prop-types";

function Filters(props) {
  const handlerInputValue = (ev) => {
    props.getFilteredCaracterValue(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <img className="image" src={image} alt="image" />
      <div className="input_container">
        <form onSubmit={handleFormSubmit}>
          <input
            className="input"
            type="text"
            name="Rick and Morty"
            id="Rick-and-Morty"
            placeholder="Busca un personaje"
            value={props.value}
            onChange={handlerInputValue}
          />
        </form>
      </div>
    </>
  );
}

Filters.propTypes = {
  value: PropTypes.string,
  getFilteredCaracterValue: PropTypes.func,
};

export default Filters;
