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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleRequest = async ({
    url,
    method,
    body,
    setData,
  }: RequestParams) => {
    setIsLoading(true);
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
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            setError("서버에 오류가 발생했습니다");
            break;
          case 404:
            setError("요청한 페이지를 찾을 수 없습니다");
            break;
          case 400:
            setError("잘못된 요청입니다");
            break;
          case 401:
            setError("인증에 실패했습니다");
            break;
          case 403:
            setError("접근 권한이 없습니다");
            break;
          default:
            setError(`오류가 발생했습니다: ${error.response.status}`);
        }
      } else if (error.request) {
        setError("서버로부터 응답이 없습니다");
      } else {
        setError(`요청 중 오류가 발생했습니다: ${error.message}`);
      }
      return error;
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
