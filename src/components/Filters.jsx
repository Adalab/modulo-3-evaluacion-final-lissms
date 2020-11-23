import React from "react";

function Filters(props) {
  const handlerInputValue = (ev) => {
    props.getFilteredCaracterValue(ev.target.value);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="Rick and Morty"
          id="Rick-and-Morty"
          placeholder="Busca un personaje"
          onChange={handlerInputValue}
        />
      </form>
    </div>
  );
}

export default Filters;
