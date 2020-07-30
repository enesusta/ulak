import { useState, useEffect } from "react";
import handleResponseType from "./util/handleResponseType";
import defaultHeaders from "./util/defaultHttpHeader";

export default function useAuthFetch(
  url: string,
  env: string = "API",
  token: string = 'token',
  config: Headers = null as any
) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(0);

  const httpHeaders: Headers = config ? config : defaultHeaders(token);

  useEffect(() => {
    let envUrl;
    if (env) envUrl = `${process.env[`REACT_APP_${env}`]}${url}`;
    else envUrl = url;

    fetch(envUrl, {
      method: "GET",
      headers: httpHeaders,
    })
      .then((res) => handleResponseType(res))
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}
