import "./style.css";
import Typography from "../Typography";
import AppImage from '../AppImage';
const Footer = () => {
  return (
    <>
      <div className="footer bg-black text-white">
        <div className="degiency">
          <Typography type="H2" className="footer-main">
            <span className="text-orange">Digie</span>ncy
          </Typography>
          <Typography type="H7" className="footer-child">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
            cursus egestas etiam posuere vitae cursus consectetur eu. Cursus
            vitae porttitor libero est posuere.
          </Typography>
        </div>
        <div className="company">
          <Typography type="H2" className="footer-main">
            Company
          </Typography>
          <Typography type="H7" className="footer-child">
            About Us
          </Typography>
          <Typography type="H7" className="footer-child">
            Our Work
          </Typography>
          <Typography type="H7" className="footer-child">
            Client
          </Typography>
          <Typography type="H7" className="footer-child">
            Our Blog
          </Typography>
          <Typography type="H7" className="footer-child">
            Contact US
          </Typography>
        </div>
        <div className="services">
          <Typography type="H2" className="footer-main">
            Services
          </Typography>
          <Typography type="H7" className="footer-child">
            Graphic Design
          </Typography>
          <Typography type="H7" className="footer-child">
            UI/UX Design
          </Typography>
          <Typography type="H7" className="footer-child">
            Web Development
          </Typography>
          <Typography type="H7" className="footer-child">
            App Development
          </Typography>
          <Typography type="H7" className="footer-child">
            Web Hosting
          </Typography>
        </div>
        <div className="newsletter">
          <Typography type="H2" className="footer-main">
            Newsletter
          </Typography>
          <Typography type="H7" className="footer-child">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            feugiat in mollis augue vel aliquam. Ut faucibus elit, libero
            varius.{" "}
          </Typography>
          <div className="inputbox">
            <input
              type="text"
              placeholder="info@gmail.com"
              className="inputimg"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/svgs/arrow.svg`}
              alt=""
              className="input-box-img"
            />
          </div>
        </div>
      </div>
      <div className="downfooter bg-orange text-white text-center">
        <div className="downfooter-text text-center">
          <Typography type="H7">
            @ Copyright 2021. All Right Reserved By Ojjomedia
          </Typography>
        </div>
        <div className="downfooter-img">
          <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/Vector.svg`} className="down-img"/>
        </div>
      </div>
    </>
  );
};
export default Footer;
