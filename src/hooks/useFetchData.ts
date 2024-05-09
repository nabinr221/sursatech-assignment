import { useState, useEffect } from "react";
import axios from "axios";

interface ImportMeta {
  readonly env: {
    [key: string]: string;
    readonly MODE: string;
    readonly BASE_URL: string;
    // Add your custom environment variables here
    readonly VITE_APP_API_BASE_URL: string;
    // Add more environment variables as needed
  };
}

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
