import React from "react";
import { useState } from "react";
import "../styles/registration.css";

function Registration() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Hey, you're name: ${values.name}, last name: ${values.lastName} and email: ${values.email} have been successfully submitted!`
    );
    setValues({ name: "", lastName: "", email: "" });
  }
  return (
    <div className='app-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          type='text'
          value={values.name}
          placeholder='Name'
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
        />
        <input
          type='text'
          value={values.lastName}
          placeholder='Last Name'
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          required
        />
        <input
          type='text'
          value={values.email}
          placeholder='Email'
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
        <input type='submit' value='Register' className='register' />
      </form>
    </div>
  );
}

export default Registration;
