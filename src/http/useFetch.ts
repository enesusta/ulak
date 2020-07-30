import {useEffect, useState} from "react";
import handleResponseType from './util/handleResponseType';

export default function useFetch(url: string,
                                 env: string = 'API') {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let envUrl;
    if (env) envUrl = `${process.env[`REACT_APP_${env}`]}${url}`;
    else envUrl = url;

    fetch(envUrl)
      .then(response => handleResponseType(response))
      .then(response => {
        setData(response);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });


  }, [url]);

  return [data, isLoading, error];
};
