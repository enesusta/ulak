import {useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: string): [any[], Boolean, any] => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
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