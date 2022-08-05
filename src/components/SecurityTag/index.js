import './style.css';
import AppImage from '../AppImage';

const SecurityTag = ()=>{
    return (
        <div className='security'>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/Group.png`} className="secure-img"/>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/Group1.png`} className="secure-img"/>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/Group4.png`} className="secure-img"/>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/Group4.png`} className="secure-img"/>
        </div>

    )
}
export default SecurityTag;