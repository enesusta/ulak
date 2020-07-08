import {useState, useEffect} from "react";
import axios from "axios";

export default function useFetch(url: string,
                                 isEnv: boolean = false,
                                 env: string): [any[], Boolean, any] {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    console.log(`url is ${url}`)
    console.log(`isEnv is ${isEnv}`)
    console.log(`env is ${env}`)

    let envUrl;
    if (isEnv && env) envUrl = `${process.env[env]}${url}`;
    else if (isEnv) envUrl = `${process.env.REACT_APP_API}${url}`;
    else envUrl = url;

    axios
      .get(envUrl)
      .then((response: any) => {
        if (response.status) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        setError(err);
      });
  }, [url]);

  return [data, loading, error];
};
