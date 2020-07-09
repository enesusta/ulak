import {useState, useEffect} from "react";
import axios from "axios";

//@ts-ignore
export default function useFetch(url: string,
                                 env: string = 'REACT_APP_API'): [any[], Boolean, any] {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let envUrl;
    if (env) envUrl = `${process.env[env]}${url}`;
    else envUrl = url;

    axios
      .get(envUrl)
      .then((response: any) => {
        if (response.status) {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        setError(err);
      });

      return () => {
        setIsLoading(false);
      }
  }, [url]);

  return { data, isLoading, error } ;
};
