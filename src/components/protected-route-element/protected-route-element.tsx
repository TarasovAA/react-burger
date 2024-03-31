import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../../local-uikit/components/index";
import { FC } from "react";
import { IsAuthChecked, GetUserInfo } from "../../services/auth/selectors";

interface IProtectedRouteElement{
    onlyUnAuth?: boolean;
    component: any;
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ onlyUnAuth = false, component}) => {
    //const accessToken = localStorage.getItem('accessToken');
    
    const isAuthChecked = IsAuthChecked();
    const user = GetUserInfo();

    const location = useLocation();

    if(!isAuthChecked)
        return <Loader />

    if(!onlyUnAuth && !user)
        return (<Navigate to='/login' state={{from: location}} replace/>);

    if(onlyUnAuth && user){
        const {from} = location.state || {from: { pathname: "/"}}

        return (<Navigate to={from} />);
    }

    return component;
}