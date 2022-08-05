import "./style.css";
import Typography from "../Typography";
import PeopleCard from "../PeopleCard";

const CARD_DATA = [
    {
        src:'https://picsum.photos/id/1/270/250',
        name:"Bishnu Mishra",
        designation:"software engineer",
    },
    {
        src:'https://picsum.photos/id/2/270/250',
        name:"Rishabh Mishra",
        designation:"software engineer",
    },
    {
        src:'https://picsum.photos/id/3/270/250',
        name:"Rachit Yadav",
        designation:"software engineer",
    },
    {
        src:'https://picsum.photos/id/4/270/250',
        name:"Amit Mishra",
        designation:"software engineer",
    }
]


const TeamMember = () => {
  return (
    <div className="team-member text-center">
      <h2 className="section-title">Team Member</h2>
      <Typography type="H2" className="section-description">
        We Have
        <span className="text-orange">Some Awesome</span> People
      </Typography>
      <div className="card-holder">
        {CARD_DATA.map((data,i)=>(
            <PeopleCard src={data.src} key={data.name} name={data.name} designation = {data.designation} />
        ))}
      </div>
    </div>
  );
};
export default TeamMember;