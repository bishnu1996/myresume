import styles from "./style.module.css";
import React, { useState } from "react";
import { Formik } from "formik";
import { resetUserPassword } from "../../Apis";
import { toastSuccess, toastError } from "../../services/toastify";

const ForgetPassword = () => {
  const [password, setPassword] = useState();
  const initialValues = {
    email: "",
  };
  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please Enter the email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const onSubmit = async (values, { setSubmitting }) => {
    const response = await resetUserPassword(values);
    if(!response.status.error){
      toastSuccess(response.status.message);
      setPassword(response.data.password);
    }else{
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
      { password ? ( <div className={styles.pageLink}> Your password is : { password } </div> ):null }
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
    <div className={styles["midle"]}>
      <div className={styles["login-container"]}>
        <form
          action=""
          id="form"
          className={styles["form"]}
          onSubmit={handleSubmit}
        >
          <h2>Forget Password</h2>
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
          <button type="submit" disabled={isSubmitting}>
            forget Password
          </button>
         
        </form>
      </div>
    </div>
  );
  //   return (
  //     <div className={styles['login-container']}>
  //         <h2>Login Form</h2>
  //       <form action="" className={styles['form']}>
  //         <div className={styles['form-control']}>
  //           <label htmlFor="email">Email</label>
  //           <input type="text" name="email" placeholder="email" />
  //           <small>email error</small>
  //         </div>
  //         <div className={styles['form-control']}>
  //           <label htmlFor="password">Password</label>
  //           <input type="password" name="password" placeholder="Password" />
  //           <small>email error</small>
  //         </div>
  //         <button type="button">Submit</button>
  //       </form>
  //     </div>
  //   );
};
export default ForgetPassword;
