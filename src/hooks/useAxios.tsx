import React, { useState } from "react";
import HttpClient from "../utils/api/customAxios";
import Loading from "../components/common/Loading";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestParams {
  url: string;
  method: HttpMethod;
  body?: any;
  setData?: React.Dispatch<React.SetStateAction<any>>;
}

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async ({
    url,
    method,
    body,
    setData,
  }: RequestParams) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;

      switch (method) {
        case "GET":
          response = await HttpClient.get(url);
          break;
        case "POST":
          response = await HttpClient.post(url, body);
          break;
        case "PUT":
          response = await HttpClient.put(url, body);
          break;
        case "DELETE":
          response = await HttpClient.delete(url);
          break;
        default:
          throw new Error("지원하지 않는 메소드입니다.");
      }
      if (setData) {
        setData(response.data);
      } else {
        return response;
      }
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleRequest,
    Loading: isLoading ? <Loading /> : null,
  };
};

export default useAxios;
