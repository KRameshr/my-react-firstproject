import React from "react";
import Form from "./Form";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Wellcom Pixim-Photo.com</h1>
      <p>Over million+ high quality stock images</p>
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Header;
