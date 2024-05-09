import { useState, useEffect } from "react";
import axios from "axios";


const useFetchData = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function: Not implemented yet.
    };
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetchData;
