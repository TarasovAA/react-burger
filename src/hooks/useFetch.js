import {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
		setData(null);
		setError(null);

        fetch(url)
        .then(result => {
            return result.json();
        })
        .then(result => {
            setData(result.data);
        })
        .catch(err => setError(err))
        .finally(() => setIsLoading(false))
    }, [url]);
    

    return [data, isLoading, error];
}