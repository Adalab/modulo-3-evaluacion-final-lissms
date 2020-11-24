import React from "react";

function Filters(props) {
  const handlerInputValue = (ev) => {
    props.getFilteredCaracterValue(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="Rick and Morty"
          id="Rick-and-Morty"
          placeholder="Busca un personaje"
          value={props.value}
          onChange={handlerInputValue}
        />
      </form>
    </div>
  );
}

export default Filters;
