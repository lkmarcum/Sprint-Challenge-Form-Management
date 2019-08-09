import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ errors, touched, status }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="login-form">
      <Form>
        <h1>Login</h1>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post(`http://localhost:5000/api/register`, values)
      .then(res => {
        setStatus(res.data);
        console.log("Server response: ", res);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLogin;
