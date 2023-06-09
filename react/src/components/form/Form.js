import React from "react";
import { useFormik } from "formik";
import validation from "./Validation";

function FormExample() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "email@email.com",
        password: "",
        passwordConfirm: "",
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
      validationSchema: validation,
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
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label htmlFor="passwordConfirm"> Password Confirm </label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
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
