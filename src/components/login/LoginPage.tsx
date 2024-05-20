import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {  useNavigate } from "react-router-dom";
import { LoginSchema } from "../../schema/formSchema";

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  return (
    <LogMainDiv>
      <Formik
        initialValues={{
          id: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
        validationSchema={LoginSchema}
      >
         {({ isSubmitting }) => (
        <Form>
          <ForminputDiv>
            <label htmlFor="id">아이디</label>
            <Field
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              className="rounded-lg mt-2 mb-2 w-full border-solid border-2 h-10 mr-1 border-MAIN_LIGHT_COLOR"
            />
            <ErrorMessage
              name="id"
              component={StyledErrorMessage}
              className="error-message"
            />
          </ForminputDiv>
          <ForminputDiv>
            <label htmlFor="password">패스워드</label>
            <Field
              type="text"
              name="password"
              placeholder="비밀번호를 입력하세요"
              className="rounded-lg mt-2 mb-2 w-full border-solid border-2 h-10 mr-1 border-MAIN_COLOR"
            />
            <ErrorMessage
              name="password"
              component={StyledErrorMessage}
              className="error-message"
            />
          </ForminputDiv>
          <ButtonDiv>
          <button type="button" onClick={()=>navigate('/signup')}  className="w-2/4 text-MAIN_COLOR h-16 rounded-lg text-lg mt-3 mr-2 border-solid border-2 border-MAIN_COLOR">
              회원가입
            </button>
            <button className="w-2/4 bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3">
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
  width: 100%;
  height: 100%;
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
`;
const ForminputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledErrorMessage = styled.div`
  color: red; 
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 6px;
  margin-left: 5px;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
`