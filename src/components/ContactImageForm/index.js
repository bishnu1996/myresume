import "./style.css";
import AppImage from "../AppImage";
import Typography from "../Typography";
import AppButton from "../AppButton";
const ContactImageForm = () => {
  return (
    <div className="contact-conatiner">
      <div className="ctn-img">
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/contacts.png`} 
          className="contform-img"
        />
      </div>
      <div className="contact-form ">
        <Typography type="H2" className="contactform-title text-center" >Send Your <span className="text-orange">Message To Us</span> </Typography>
        <form action="" method="" encType="multipart/form-data">
          <div className="form-control">
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-text"
            />
          </div>
          <div className="form-control">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input-text"
            />
          </div>
          <div className="form-control">
            {/* <label htmlFor="mobile">Mobile No</label> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-text"
            />
          </div>
          <div className="form-control">
            {/* <label htmlFor="subject">Subject</label> */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-text"
            />
          </div>
          <div className="form-control">
            {/* <label htmlFor="name">Message</label> */}
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              className="input-text"
            ></textarea>
          </div>
          <AppButton className="contact-btn">Send Message</AppButton>
        </form>
      </div>
    </div>
  );
};
export default ContactImageForm;
