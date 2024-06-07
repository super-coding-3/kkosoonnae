import React from "react";
import HttpClient from "../../utils/api/customAxios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../schema/formSchema";
import { useState } from "react";

import ToastMessage from "../common/ToastMessage";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4 font-bold text-sm max-w-[640px] min-w-[375px] mx-auto">
      {toastMessage && <ToastMessage message={toastMessage} />}
      <Formik
        initialValues={{
          loginId: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            loginId: values.loginId,
            password: values.password,
          };
          HttpClient.post("/api/customer/login", payload)
            .then((response) => {
              setToastMessage("로그인이 성공하였습니다!");
              const res = response.data;
              const token = res.data.token;
              localStorage.setItem("token", token);
              setTimeout(() => {
                navigate("/");
              }, 1000); // 1초 후에 페이지 이동
            })
            .catch((error) => {
              setToastMessage("로그인이 실패하였습니다");
              console.log(error);
            });
          setSubmitting(false);
        }}
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
                  navigate("/signup");
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
