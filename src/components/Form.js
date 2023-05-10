import React from "react";
import { Formik } from "formik";

function FormExample() {
  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log({
            status: "Form submitted",
            values: values,
            date: new Date(),
          });
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormExample;
