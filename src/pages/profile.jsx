import { ProfileNavigation } from "../components/profile-navigation/profile-navigation";
import { Input, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {
    return (<div>
            <ProfileNavigation />
            <div className="mt-20 ml-10" style={{ display: "inline-block" }}>
                <Input
                    placeholder="Имя"
                    icon="EditIcon"
                    extraClass="mb-2"
                     />
                <EmailInput
                    icon="EditIcon"
                    extraClass="mb-2"
                    />
                <PasswordInput
                     extraClass="mb-2"
                      />
            </div>
            <div>
                <p className='text text_type_main text_color_inactive mt-5'>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
    </div>);
}

export default Profile;