import "./style.css";
//import Header from "../../components/Header";
import Poster from "../../components/Poster";
import AboutUs from "../../components/AboutUs";
import OurExperience from "../../components/OurExperience";
import TeamMember from '../../components/TeamMember';
import OurWork from '../../components/OurWork';
import ClientFeedback from "../../components/ClientFeedback";
import OurBlog from "../../components/OurBlog";
import ContactUs from '../../components/ContactUs';
import ContactImageForm from "../../components/ContactImageForm";
import Map from "../../components/Map";
import SecurityTag from "../../components/SecurityTag";
//import Footer from "../../components/Footer";
function Homepage() {
  return (
    <>
      {/* <Header /> */}
      <Poster />
      <AboutUs/>
      <OurExperience/>
      <TeamMember />
      <OurWork />
      <ClientFeedback />
      <OurBlog />
      <ContactUs />
      <ContactImageForm />
      <Map />
      <SecurityTag/>
      {/* <Footer/> */}
    </>
  );
}

export default Homepage;
