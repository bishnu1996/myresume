import AppButton from "../AppButton";
import Typography from "../Typography";
import "./style.css";

const OurExperience = () => {
  return (
    <div className="ourexperience bg-orange-v2">
      <div className="experinec-text">
        <Typography type="H7">Our Expereince</Typography>
        <Typography type="H4" className="experience-title">
          We Have Completed <span className="text-orange">150+ Projects </span>{" "}
          Succesfully
        </Typography>
        <Typography type="H7" className="experience-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          imperdiet at a augue ullamcorper. Ornare etiam erat volutpat tempor
          fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
        </Typography>
        <AppButton className="btn">Contact Us</AppButton>
      </div>
      <div className="experinec-box text-center">
        <div className="box1">
          <h1 className="heading">250+</h1>
          <p>Global Customer</p>
        </div>
        <div className="box1 box-down">
          <h1 className="heading">156+</h1>
          <p>Project Completed</p>
        </div>
        <div className="box1">
          <h1 className="heading">50+</h1>
          <p>Team Member</p>
        </div>
        <div className="box1">
          <h1 className="heading">15+</h1>
          <p>Our Company</p>
        </div>
      </div>
    </div>
  );
};
export default OurExperience;
