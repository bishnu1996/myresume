import './style.css';

const AppImage = (props)=>{

    const getClassNames = ()=>{
        return `app-image ${props.className}`;
    }
    return  <img src={props.src} className={getClassNames()} alt={props.alt}/>
}

export default AppImage;