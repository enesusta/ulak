import {useState, useEffect} from "react";
import axios, {AxiosRequestConfig} from "axios";

export default function useAuthFetch(url: string,
                                     config: AxiosRequestConfig,
                                     isEnv: boolean = false,
                                     env: string): [any[], Boolean, any] {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const httpHeaders = config ?
    config : {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

  useEffect(() => {

    let envUrl;
    if (isEnv && env) envUrl = `${process.env[env]}${url}`;
    else if (isEnv) envUrl = `${process.env.REACT_APP_API}${url}`;
    else envUrl = url;

    axios
      .get(envUrl, httpHeaders)
      .then((response) => {
        if (response.status) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch(err => {
        setError(err);
      });
  }, [url]);

  return [data, loading, error];
};
