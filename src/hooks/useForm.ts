import { ChangeEvent, useState } from "react";

export const useForm = (props: { [name: string]: string}) => {
    const [values, setValues] = useState({
        ...props
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    }

    return {values, handleChange, setValues};
}