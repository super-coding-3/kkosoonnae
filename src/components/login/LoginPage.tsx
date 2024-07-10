import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../schema/formSchema";

import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";
import { ROUTER_PATH } from "../../constants/constants";
import LoginRequiredMessage from "./LoginRequiredMessage";
interface LoginType {
  loginId: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const handleFormSubmit = (values: LoginType) => {
    const payload = {
      loginId: values.loginId,
      password: values.password,
    };
    handleRequest({
      url: "/api/user/customer/login",
      method: "POST",
      body: payload,
      setData: (data) => {
        localStorage.setItem("token", data.data.token);
      },
    });
    if (!error) {
      showToast({
        message: "로그인이 성공하였습니다!",
        action: () => {
          navigate(ROUTER_PATH.main);
        },
      });
    } else {
      showToast({
        message: "error",
      });
    }
  };

  const initialValues = {
    loginId: "",
    password: "",
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4 font-bold text-sm max-w-[640px] min-w-[375px] mx-auto">
      {Loading}
      <Toast />
      {location.pathname !== ROUTER_PATH.login && <LoginRequiredMessage />}
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting }) => (
          <Form className="w-full mt-4 mb-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="loginId">아이디</label>
              <Field
                type="text"
                name="loginId"
                placeholder="아이디를 입력하세요"
                className="rounded-lg mt-2 mb-1 w-full border-solid border-2 h-10 border-MAIN_COLOR"
              />
              <ErrorMessage
                name="loginId"
                component="div"
                className="text-xs ml-2 text-red-600 mt-1 mb-2"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">패스워드</label>
              <Field
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                className="rounded-lg mt-2 mb-1 w-full border-solid border-2 h-10 border-MAIN_COLOR"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs ml-2 text-red-600 mt-1 mb-2"
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  navigate(ROUTER_PATH.signup);
                }}
                className="w-1/2 text-MAIN_COLOR h-16 rounded-lg text-lg mt-3 border-solid border-2 border-MAIN_COLOR"
              >
                회원가입
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
              >
                로그인
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
