import {useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: string): [any[], Boolean, any] => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(localStorage.getItem('test'));
    axios
      .get(url)
      .then((response) => {
        if (response.status) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch( err => {
        setError(err);
      });
  }, [url]);

  return [data, loading, error];
};