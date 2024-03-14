import './index.css';
import { useState, useEffect } from 'react';

export const Loader = () => {
    return (<div className='loader' />);
}

export const ErrorBlock = ({message}) => {
    const [visible, setVisible] = useState(false);
    
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

    return (visible && (<div className='errorBlock p-5'>
        <p className='text text_type_main text_color_inactive'>{message}</p>
    </div>));
}