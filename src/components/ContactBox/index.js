import "./style.css";
import AppImage from "../AppImage";
import Typography from "../Typography";

const ContactBox = (props) => {
  return (
    <div className="contactBox-container">
      <div className="contactbox-design">
        <div className="message-image">
          <AppImage src={props.src} className="box-img" />
        </div>
        <div className="message-text">
          <Typography type="H4" className="domain text-orange">
            {props.service}
          </Typography>
          <Typography type="H3" className="content">
            {props.contact}
          </Typography>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-detls">
          <Typography type="H7"  className="contact-email">{props.email}</Typography>
          <Typography type="H7" className="contact-email number">{props.number}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
