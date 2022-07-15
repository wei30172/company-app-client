import { useState, useEffect } from "react";
import { AxiosInstance } from "axios";
import getError from "../utils/getError";

const useFetch = <T>(api: AxiosInstance) => {
  const [data, setData] = useState<T[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getAPIData = async () => {
      setLoading(true);
      try {
        const response = await api.get("/");
        setLoading(false);
        setError("");
        setData(response.data);
      } catch (err: unknown) {
        setLoading(false);
        if (err instanceof Error) {
          setError(getError(err));
        }
        setData(null);
      }
      setLoading(false);
    };

    getAPIData();
  }, [api]);

  return { data, loading, error };
};

export default useFetch;
