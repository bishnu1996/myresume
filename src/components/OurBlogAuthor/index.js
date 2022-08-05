import './style.css';
import AppImage from '../AppImage'
import Typography from '../Typography';

const OurBlogAuthor = (props)=>{
    return(
        <div className="author-container">
            <div className="graphic-design">
                <div className="author-text">
                 <Typography type="H7" className="domain">{props.domain}</Typography> 
                 <Typography type="H7" className="content">{props.content}</Typography>   
                </div>
                <div className="work-image">
                <AppImage src={props.workImage} className="work-img"/>
                </div>
            </div>
            <div className="author-details">
                <div className="author-image">
                    <AppImage src={props.profileImage} className="auth-img"/>
                </div>
                <div className="author-detls">
                    <Typography type="H7">{props.authorName}</Typography>
                    <Typography type="H7">{props.dateTime}</Typography>
                </div>
            </div>
        </div>
    );
}

export default OurBlogAuthor;