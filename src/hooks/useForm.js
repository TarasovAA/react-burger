import { useState } from "react";

export const useForm = (props) => {
    const [values, setValues] = useState({
        ...props
    });

    const handleChange = (event) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    }

    return {values, handleChange, setValues};
}