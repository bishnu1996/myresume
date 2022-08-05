import "./style.css";


const AboutCard = (props) => {
  return (
    <div className="about-card">
        <div className="about-card-image">
            <img src={props.src} alt={props.alt} />
        </div>
        <h4 className="about-card-title">{props.title}</h4>
    </div>
  );
};
export default AboutCard;
