import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../local-uikit/components/index";
import { FC } from "react";

interface IProtectedRouteElement{
    onlyUnAuth?: boolean;
    component: any;
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ onlyUnAuth = false, component}) => {
    //const accessToken = localStorage.getItem('accessToken');
    
    /* @ts-ignore */
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);
    /* @ts-ignore */
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