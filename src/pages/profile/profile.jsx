import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import { Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector(store => store.user.user);

    console.log(user);
    return (<div>
            <ProfileNavigation />
            <div className="mt-20 ml-10" style={{ display: "inline-block" }}>
                <Input
                    placeholder="Имя"
                    icon="EditIcon"
                    extraClass="mb-2"
                    value={user && user.name}
                     />
                <EmailInput
                    icon="EditIcon"
                    extraClass="mb-2"
                    value={user && user.email}
                    />
                <PasswordInput
                     extraClass="mb-2"
                    />
                <Button type="secondary">Отмена</Button>
                <Button>Сохранить</Button>
            </div>
            <div>
                <p className='text text_type_main text_color_inactive mt-5'>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
    </div>);
}

export default Profile;