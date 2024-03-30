import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import '../index.css';
import {FC} from "react";

interface IProfile{
    profileElement: JSX.Element
}

const Profile: FC<IProfile> = ({profileElement}) => {
    return (<div className='p-30 profileMainDiv'>
            <ProfileNavigation />
            <div>
                {profileElement}
            </div>
           
    </div>);
}

export default Profile;