// Fetches data from backend. Returns an object containing fetch data, status, and error (if applicable).

import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); // Data returned from fetch.
    const [isPending, setIsPending] = useState(true); // Is the fetch pending?
    const [error, setError] = useState(null); // Error returned from fetch.

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    setError("Cannot fetch data.");
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setError(e.message);
                setIsPending(false);
                console.log(e.message);
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;