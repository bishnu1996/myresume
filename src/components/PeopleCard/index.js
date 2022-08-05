import './style.css';


const PeopleCard = (props)=>{
    return(
        <div className="people-card">
            <div className="people-imgage" alt="Paerson Card">
               <img src={props.src} alt="" />
            </div>
            <div className="people-text">
                <h4 className="title">{props.name}</h4>
                <p className="designation">{props.designation}</p>
            </div>
        </div>
    );
}

export default PeopleCard;