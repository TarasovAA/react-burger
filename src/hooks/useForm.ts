import { ChangeEvent, useState } from "react";

interface IFormProps{
    [name: string]: string;
}

interface IUseForm{
    values: {[tk in keyof IFormProps]: string};
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    setValues: (props: {[tk in keyof IFormProps]: string}) => void;
}

export const useForm = (props: IFormProps): IUseForm => {
    const [values, setValues] = useState<{[tk in keyof IFormProps]: string}>({
        ...props
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    }

    return {values, handleChange, setValues};
}