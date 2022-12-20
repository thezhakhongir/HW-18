import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const useFetch = (url, method, body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: url,
        method: method === null ? "GET" : method,
        data: method === null || method === "DELETE" ? null : {body},
      });
      let newArr = [];
      if (method === undefined) {
        const result = await response.data;
        for (const key in result) {
          newArr.unshift({
            id: key,
            ...result[key],
          });
        }
        setData(newArr);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [body, url, method]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return { data, error, isLoading, fetchHandler, fetchUI: fetchHandler };
};

export default useFetch;
