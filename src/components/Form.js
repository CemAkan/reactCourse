import React from "react";
import { useFormik } from "formik";

function FormExample() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "email@email.com",
      password: "password123",
      gender: "noGender",
      hobies: [],
      country: "Turkey",
    },
    onSubmit: (values) => {
      console.log({
        status: "Form submitted",
        values: values,
        date: new Date(),
      });
    },
  });

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <br />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <br />
        <span>I don't want to say</span>
        <input
          type="radio"
          name="gender"
          value="noGender"
          onChange={handleChange}
          checked={values.gender === "noGender"}
        />
        <br />
        <br />
        <span>Hobies</span>
        <br />
        Football
        <input
          type="checkbox"
          name="hobies"
          value="Football"
          onChange={handleChange}
        />
        <br />
        Cinema
        <input
          type="checkbox"
          name="hobies"
          value="Cinema"
          onChange={handleChange}
        />
        <br />
        Work
        <input
          type="checkbox"
          name="hobies"
          value="Work"
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="Turkey">Turkey</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {`
              email: ${values.email}
            `}
        <br />
        {` 
              password: ${values.password}
            
            `}
        <br />
        {`
              gender: ${values.gender}
            
            `}
        <br />
        {`
              hobies: ${values.hobies}
            
            `}
        <br />
        {`
                country: ${values.country}
            `}
      </form>
    </div>
  );
}

export default FormExample;
