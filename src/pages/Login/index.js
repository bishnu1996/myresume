import styles from './style.module.css';
import React from "react";
import { Formik } from "formik";
import { loginUser } from "../../Apis";
import { toastSuccess,toastError } from '../../services/toastify' 
import { USER_DATA } from '../../services/storage';
import { useNavigate } from "react-router-dom";
import { setStorageData } from '../../services/storage';

const Login = () => {
  const navigate = useNavigate();
  const gotoHome = () =>{
    navigate({pathname:'/'})
  }
    const initialValues = {
        email: "",
        password: "",
      };
      const validator = (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please Enter the email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Please Enter the password";
        } else if (values.password.length > 6) {
          errors.password = "Password must be 6 character";
        }
    
        return errors;
      };
      const onSubmit = async (values, { setSubmitting }) => {
        const response = await loginUser(values);
        console.log('login success',values);
        console.log("response", response);
        if (!response.status.error) {
          setStorageData(USER_DATA,response.data);
          toastSuccess(response.status.message);
          gotoHome();
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
        <div className={styles['login-container']}>
          <form action="" id="form" className={styles['form']} onSubmit={handleSubmit}>
            <h2>Login with Us</h2>
            <div className={styles['form-control']}>
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
            <div className={styles['form-control']}>
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
            <button type="submit" disabled={isSubmitting}>
              Submit
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
export default Login;