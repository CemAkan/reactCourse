import React from "react";
import { Formik, Form, Field } from "formik";

function FormExample() {
  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <br />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormExample;
