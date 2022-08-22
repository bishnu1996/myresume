import { getStorageData, USER_DATA } from '../../services/storage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ProtectedRouter = (props)=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const user = getStorageData(USER_DATA);
        if(props.isLogin){
            if(!!user){
                navigate('/');
            }
        }else {
            if(!user){
                navigate('/login');
            }
        }
        
    })
   
    return props.children;
}
export default ProtectedRouter;