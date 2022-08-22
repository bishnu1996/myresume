import Homepage from "../Homepage";
import Register from "../Register";
import Login from "../Login";
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TeamMember from "../../components/TeamMember";
import OurWork from "../../components/OurWork";
import AboutUs from "../../components/AboutUs";
import ClientFeedback from "../../components/ClientFeedback";
import ContactUs from "../../components/ContactUs";
import ContactImageForm from "../../components/ContactImageForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OurBlog from "../OurBlog";
import ForgetPassword from "../ForgetPassword";
import ProtectedRouter from "../ProtectedRouter";
import BlogDetails from "../BlogDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <Homepage />
              </ProtectedRouter>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <ProtectedRouter isLogin={true}>
                <Login />
              </ProtectedRouter>
            }
          ></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route
            path="/register"
            element={
              <ProtectedRouter isLogin={true}>
                <Register />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/about-us"
            element={
              <ProtectedRouter>
                <AboutUs />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/team-member"
            element={
              <ProtectedRouter>
                <TeamMember />
              </ProtectedRouter>
            }
          ></Route>

           <Route
            path="/our-blogs/:blogId"
            element={
              <ProtectedRouter>
                <BlogDetails />
              </ProtectedRouter>
            }
          ></Route>

          <Route
            path="/our-blogs"
            element={
              <ProtectedRouter>
                <OurBlog />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/clients"
            element={
              <ProtectedRouter>
                <ClientFeedback />
              </ProtectedRouter>
            }
          ></Route>
          <Route path="/footer" element={<Footer />}></Route>
          {/* <Route path="/protected-router" element={<ProtectedRouter />}></Route> */}
          <Route
            path="/contact-us"
            element={
              <ProtectedRouter>
                 <>
                <ContactUs /> <ContactImageForm />
              </>
              </ProtectedRouter>
             
            }
          ></Route>
          <Route
            path="/our-work"
            element={
              <ProtectedRouter>
                <OurWork />
              </ProtectedRouter>
            }
          ></Route>
          <Route path="/forget-pass" element={<ForgetPassword />}></Route>

          <Route path="*" element={<h1>There is nothing here: 404</h1>}></Route>
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
