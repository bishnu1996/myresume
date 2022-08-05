import React from "react";
import { Formik } from "formik";
import { registerUser } from "../../Apis";
import styles from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const success = (msg) => toast.success(msg);
  const failed = (msg) => toast.error(msg);
  const initialValues = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  };
  const validator = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 6) {
      errors.username = "Username must be less than 6 character";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 6) {
      errors.password = "Password must be 6 character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password is not match";
    }

    return errors;
  };
  const onSubmit = async (values, { setSubmitting }) => {
    console.log("hello registered");
    const response = await registerUser(values);
    console.log("response", response);
    if (!response.status.error) {
      // alert(response.status.message);
      success("Register successfully");
    } else {
      // alert("registration failled");
      failed("Register failled");
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {myForm}
      </Formik>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};
const myForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <div className={styles['midle']}>
    <div className={styles['register-container']}>
      <form action="" id="form" className={styles['form']} onSubmit={handleSubmit}>
        <h2>Register with Us</h2>

        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            type="txt"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <small>
            {errors.username && touched.username && errors.username}
          </small>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <small>{errors.email && touched.email && errors.email}</small>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <small>
            {errors.password && touched.password && errors.password}
          </small>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter password again"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <small>
            {errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword}
          </small>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};
export default Register;
