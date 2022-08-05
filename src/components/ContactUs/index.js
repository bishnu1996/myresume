import "./style.css";
import Typography from "../Typography";
import ContactBox from "../ContactBox";

const contactData = [
  {
    email: "Support87@gmial.com",
    number: "ijkuiu874@gmial.com",
    contact: "Mail Us",
    service: "Drop a line",
    src: `${process.env.PUBLIC_URL}/assets/svgs/message.svg`,
  },
  {
    email: `+895 855 85589`,
    number: "+880 265 98745 ",
    contact: "Call Us",
    service: "24/7 Service",
    src: `${process.env.PUBLIC_URL}/assets/svgs/contact.svg`,
  },
  {
    email: "hwellet pockerd",
    number: "jay shee ac fwqfw",
    contact: "Visit Us",
    service: "Location",
    src: `${process.env.PUBLIC_URL}/assets/svgs/location.svg`,
  },
];

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contact-text text-center">
        <Typography type="H7" className="contact-title">Contact Us</Typography>
        <Typography type="H2" className="contact-subtitle">Feel <span className="text-orange">Free to Contact</span>  With Us</Typography>
      </div>
      <div className="contact-box">
        {contactData.map((data, i) => (
          <ContactBox
            src={data.src}
            email={data.email}
            number={data.number}
            service={data.service}
            contact={data.contact}
            key={data.number}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
