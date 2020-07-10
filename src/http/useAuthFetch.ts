import React from "react";
import axios, {AxiosRequestConfig} from "axios";

//@ts-ignore
export default function useAuthFetch(url: string,
                                     env: string = 'REACT_APP_API',
                                     token: string = 'token',
                                     config: AxiosRequestConfig = null as any) {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<any>();

  const httpHeaders = config ?
    config : {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(token)}`
      }
    }

  React.useEffect(() => {

    let envUrl;
    if (env) envUrl = `${process.env[env]}${url}`;
    else envUrl = url;

    axios
      .get(envUrl, httpHeaders)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.response);
        setIsLoading(false);
      });

  }, [url]);

  return {data, isLoading, error};
};
