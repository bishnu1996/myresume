import ClientDetails from "../ClientDetails";
import Typography from "../Typography";

import "./style.css";

const clientData = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/Profile.png`,
    title: "Justin Septimus",
    domain: "CEO,word yt",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/Profile2.png`,
    title: "Ashlynn Gouse",
    domain: "Managing Director",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ClientFeedback = () => {
  return (
    <div className="client-feed bg-orange-v2">
      <div className="client-text-title text-center">
        <Typography type="H7" className="feed-title">
          Clients Feedback
        </Typography>
        <Typography type="H2" className="feed-head">
          Some <span className="text-orange">Great Words</span> From Our Clients
        </Typography>
      </div>
      <div className="clients-img">
        {clientData.map((data) => (
          <ClientDetails
            src={data.src}
            title={data.title}
            domain={data.domain}
            details={data.details}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
