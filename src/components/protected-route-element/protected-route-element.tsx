import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../../local-uikit/components/index";
import { FC } from "react";
import { isAuthChecked, getUserInfo } from "../../services/auth/selectors";
import { useSelector } from "../../services/hooks";

interface IProtectedRouteElement{
    onlyUnAuth?: boolean;
    component: any;
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ onlyUnAuth = false, component}) => {
    //const accessToken = localStorage.getItem('accessToken');
    
    const authChecked = useSelector(isAuthChecked);
    const user = useSelector(getUserInfo);

    const location = useLocation();

    if(!authChecked)
        return <Loader />

    if(!onlyUnAuth && !user)
        return (<Navigate to='/login' state={{from: location}} replace/>);

    if(onlyUnAuth && user){
        const {from} = location.state || {from: { pathname: "/"}}

        return (<Navigate to={from} />);
    }

    return component;
}