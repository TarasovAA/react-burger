import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../local-uikit/components/index";
import { useEffect } from "react";

export const ProtectedRouteElement = ({ onlyUnAuth = false, component}) => {
    //const accessToken = localStorage.getItem('accessToken');
    
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);

    const user = useSelector(store => store.user.user);

    const location = useLocation();

    if(!isAuthChecked)
        return <Loader />
        //return null;

    if(!onlyUnAuth && !user)
        return (<Navigate to='/login' state={{from: location}} replace/>);

    if(onlyUnAuth && user){
        const {from} = location.state || {from: { pathname: "/"}}

        return (<Navigate to={from} />);
    }
    return component;
}