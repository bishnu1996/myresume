import './style.css';
import Typography from '../Typography'

const ClientDetails = (props)=>{
    return(
        <div className="client-details">
            <img src={props.src} alt={props.alt} className="profile"/>
            <div className="client-text bg-orange">
                <Typography type="H7" className="client-title">{props.title}</Typography>
                <Typography type="H7" className="client-domain">{props.domain}</Typography>
                <Typography type="H7" className="client-details">{props.details}</Typography>
            </div>
        </div>
    );
}

export default ClientDetails;