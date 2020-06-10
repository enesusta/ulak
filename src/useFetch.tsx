import { useEffect, useState } from "react";

/** 
interface FetchInterface {
    data: any[],
    loading: Boolean
}
*/

export const useFetch = (url: string) : [any[], Boolean] => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url) 
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            });
    }, [url]);

    return [data, loading];
};