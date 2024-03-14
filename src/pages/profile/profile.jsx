import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import '../index.css';

const Profile = ({profileElement}) => {
    return (<div className='p-30 profileMainDiv'>
            <ProfileNavigation />
            <div>
                {profileElement}
            </div>
           
    </div>);
}

export default Profile;