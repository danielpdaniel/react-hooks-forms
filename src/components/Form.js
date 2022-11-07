import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
