import { removeStorageData,USER_DATA } from "../../services/storage";
import { useNavigate } from "react-router-dom";
const Logout = ()=>{
    const navigate = useNavigate();
    const Logout = ()=>{
        removeStorageData(USER_DATA);
        navigate('/login');
    }
    return(
        <div>
            <button className="logout" onClick={Logout}>logout</button>
        </div>
    )
}
export default Logout;
