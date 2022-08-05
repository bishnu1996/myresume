import "./style.css";
import Typography from "../Typography";
import AppImage from '../AppImage';
const OurWork = () => {
  return (
    <div className="ourWork">
      <Typography type="H7" className="work-head text-center">Our Work</Typography>
      <Typography type="H2" className="work-title text-center">
        We Have Some <span className="text-orange">Designed & Development </span> Projects
      </Typography>
      <nav className="navbar">
        <ul className="nav-ul">
            <li>All</li>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
        </ul>
      </nav>
      <div className="ourwork-image">
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work1.png`} className="ourwork-img"/>
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work2.png`} className="ourwork-img"/>
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work3.png`} className="ourwork-img"/>
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work4.png`} className="ourwork-img"/>
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work5.png`} className="ourwork-img"/>
        <AppImage src={`${process.env.PUBLIC_URL}/assets/images/work6.png`} className="ourwork-img"/>
      </div>
    </div>
  );
};

export default OurWork;