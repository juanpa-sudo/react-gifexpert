import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmitPrevent = (e) => {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCategories((cat) => [input, ...cat]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmitPrevent}>
      <input
        type="text"
        className="inputTex"
        value={input}
        placeholder="Ingresa una Categoria"
        onChange={handleInputChange}
      ></input>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
