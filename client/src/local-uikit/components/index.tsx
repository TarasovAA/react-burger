import './index.css';
import { useState, useEffect, FC } from 'react';

export const Loader = () => {
    return (<div className='loader' />);
}

interface IErrorBlockProps{
    message?: string | null;
}

export const ErrorBlock: FC<IErrorBlockProps> = ({message}) => {
    const [visible, setVisible] = useState<boolean>(false);
    
    useEffect(() => {
        if(!message){
            setVisible(false);
            return;
        }

        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000)

        return () => clearTimeout(timer);
    }, [message]);

    //TODO: как сохранить нормальное здесь нормальное описание без возврвта <></> ?
    return (visible ? (<div className='errorBlock p-5'>
        <p className='text text_type_main text_color_inactive'>{message}</p>
    </div>): <></>);
}