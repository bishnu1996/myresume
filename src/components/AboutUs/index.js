import "./style.css";
import AppImage from "../AppImage";
import Typography from "../Typography";
import AppButton from "../AppButton";
import AboutCard from "../AboutCard";

const AboutCardData = [
    {
        src:`${process.env.PUBLIC_URL}/assets/svgs/file.svg`,
        title:"World leader in consulting and finance",
    },
    {
        src:`${process.env.PUBLIC_URL}/assets/svgs/code.svg`,
        title:"A focused team with a specialized skill",
    },
    {
        src:`${process.env.PUBLIC_URL}/assets/svgs/setting.svg`,
        title:"Trusted and professional advisors for you",
    },
    {
        src:`${process.env.PUBLIC_URL}/assets/svgs/redirect.svg`,
        title:"Experience to give you a better results",
    },
    
]

function AboutUs() {
  return (
    <>
    <section className="about-section">
      <div className="about-image">
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/about-us-poster.png`}
          alt="About image"
          className="about-poster-image"
        />
      </div>
      <div className="about-text text-center">
        <Typography type="H7" className="about">About Us</Typography>
        <Typography type="H3" className="about-title text-black">
          We Are <span className="text-orange"> Making Ideas Better</span> For Everyone
        </Typography>
        <Typography type="H7" className="about-content text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean
          Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
          faucibus est, dui interdum ut amet.
        </Typography>
        <AppButton className="about-button">Contact Us</AppButton>
      </div>
    </section>
    <section className="about-flex">
        {AboutCardData.map((data)=>(
            <AboutCard src={data.src} key={data.title} title = {data.title}/>
        ))}
    </section>
    
    </>
  );
}

export default AboutUs;
