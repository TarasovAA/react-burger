import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import '../index.css';
import {FC} from "react";

interface IProfile{
    profileElement: JSX.Element
}

const ProfilePage: FC<IProfile> = ({profileElement}) => {
    return (<div className='p-30 profileMainDiv'>
            <ProfileNavigation />
            <div style={{width: '100%'}}>
                {profileElement}
            </div>
           
    </div>);
}

export default ProfilePage;