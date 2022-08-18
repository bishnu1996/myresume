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
import OurBlog from "../../components/OurBlog";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/team-member" element={<TeamMember />}></Route>
          <Route path="/our-blogs" element={<OurBlog />}></Route>
          <Route path="/clients" element={<ClientFeedback />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs /> <ContactImageForm />
              </>
            }
          ></Route>
          <Route path="/our-work" element={<OurWork />}></Route>

          <Route path="*" element={<h1>There is nothing here: 404</h1>}></Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
