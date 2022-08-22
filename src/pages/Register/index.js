import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { registerUser } from "../../Apis";
import styles from "./style.module.css";
import { setStorageData,USER_DATA } from "../../services/storage";
import { toastSuccess,toastError } from "../../services/toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {

  let naviagte = useNavigate();

  const gotoHome = ()=>{
    naviagte('/');
  }
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
    console.log("hello registered",values);
    const response = await registerUser(values);
    console.log("response", response);
    // console.log(USER_DATA,response);
    console.log(response.status.error);
    if (!response.status.error) {
      console.log(USER_DATA,response.status.message);
      toastSuccess(response.status.message);
      setStorageData(USER_DATA, response.data);
      gotoHome();
      console.log(USER_DATA,response.data);
    } else {
      toastError(response.status.message);
    }
    setSubmitting(false);
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
        <div>
            Already registered?<Link to='/login'>Click Here</Link>
        </div>
      
      </form>
    </div>
    </div>
  );
};
export default Register;
