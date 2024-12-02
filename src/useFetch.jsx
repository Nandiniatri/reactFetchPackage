import { useEffect, useState } from 'react';

export const useFetchnpm = (url) =>{
    const [data , setData] = useState([]);

    const fetchData = async() =>{
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }

    useEffect(() =>{
        fetchData();
    },[url])

    return {data}
}