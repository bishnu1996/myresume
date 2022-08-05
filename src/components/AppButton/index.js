import './style.css';


const AppButton = (props)=>{
    const getClassNames = ()=>{
        return `h3 text-white bg-orange app-button ${props.className}`
    }
    return (
        <button type="button" className={getClassNames()} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default AppButton;