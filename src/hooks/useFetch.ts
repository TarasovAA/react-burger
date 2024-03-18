import {useState, useEffect} from "react";

export const useFetch = (url: string): any => {
    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

    let cancelled = false;

    useEffect(() => {
        setIsLoading(true);
		setData(null);
		setError(null);

        fetch(url)
        .then(result => {
            return result.json();
        })
        .then(result => {
            if (!cancelled)
                setData(result.data);
        })
        .catch(err => {if (!cancelled) setError(err)})
        .finally(() => { if (!cancelled) setIsLoading(false) })

        return () => {
            cancelled = true;
        }
    }, [url]);
    

    return [data, isLoading, error];
}