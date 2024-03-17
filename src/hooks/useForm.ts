import { ChangeEvent, useState } from "react";

interface IFormProps{
    [name: string]: string;
}

export const useForm = (props: IFormProps) => {
    const [values, setValues] = useState<{[tk in keyof IFormProps]: string}>({
        ...props
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    }

    return {values, handleChange, setValues};
}