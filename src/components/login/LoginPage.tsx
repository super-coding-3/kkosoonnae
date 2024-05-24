import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HttpClient from "../../utils/api/customAxios";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../schema/formSchema";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LogMainDiv>
      <Formik
        initialValues={{
          LoginId: "",
          LoginPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            loginId: values.LoginId,
            password: values.LoginPassword,
          };
          HttpClient.post("/KkoSoonNae/customer/login", payload)
            .then((response) => {
              alert("로그인이 성공하였습니다");
              const res = response.data;
              let token = res.data.token;
              if (token.startsWith("Bearer ")) {
                token = token.slice(7);
              }
              console.log(token);
              localStorage.setItem("token", token);
              navigate("/");
            })
            .catch((error) => {
              alert("로그인이 실패하였습니다");
              console.log(error);
            });
          setSubmitting(false);
        }}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto max-w-xl min-w-[320px] w-full mt-4 mb-4">
            <h1 className="text-[20px] mb-3">로그인</h1>
            <ForminputDiv>
              <label htmlFor="id">아이디</label>
              <Field
                type="text"
                name="LoginId"
                placeholder="아이디를 입력하세요"
                className="rounded-lg mt-2 mb-1 w-full border-solid border-2 h-10 mr-1 border-MAIN_LIGHT_COLOR"
              />
              <ErrorMessage name="LoginId" component="div" className="text-xs  ml-2 text-red-600 mt-1 mb-2" />
            </ForminputDiv>
            <ForminputDiv>
              <label htmlFor="password">패스워드</label>
              <Field
                type="password"
                name="LoginPassword"
                placeholder="비밀번호를 입력하세요"
                className="rounded-lg mt-2 mb-1 w-full border-solid border-2 h-10 mr-1 border-MAIN_COLOR"
              />
              <ErrorMessage name="LoginPassword" component="div" className="text-xs ml-2 text-red-600 mt-1 mb-2" />
            </ForminputDiv>
            <ButtonDiv>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="w-2/4 text-MAIN_COLOR h-16 rounded-lg text-lg mt-3 mr-2 border-solid border-2 border-MAIN_COLOR"
              >
                회원가입
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/4 bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
              >
                로그인
              </button>
            </ButtonDiv>
          </Form>
        )}
      </Formik>
    </LogMainDiv>
  );
};

export default LoginPage;

const LogMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  min-width: 375px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
`;

const ForminputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
