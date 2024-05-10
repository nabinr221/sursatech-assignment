import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiResponse {
  // Define the structure of your API response data here
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<ApiResponse[]> = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`
        );
        setData(response.data); // Wrap response.data in an array
      } catch (error) {
        setError(error as AxiosError<any>);
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
