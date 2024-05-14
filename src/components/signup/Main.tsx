import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { MAIN_LIGHT_COLOR } from "../../constans/color";
import * as Yup from "yup";
import Postcode from "./PostCode";
const formFields = [
  { name: "id", label: "아이디", type: "text" },
  { name: "password", label: "패스워드", type: "password" },
  { name: "email", label: "이메일", type: "email" },
  { name: "phoneNumber", label: "핸드폰번호", type: "tel" },
  { name: "nickName", label: "닉네임", type: "text" },
];

const Regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const SignupSchema = Yup.object().shape({
  id: Yup.string().matches(
    Regex,
    "아이디는 숫자,대문자, 특수문자 를 포함한 6자리 이상이어야 합니다"
  ),

  password: Yup.string().matches(
    Regex,
    "비밀번호는 숫자,대문자, 특수문자 를 포함한 6자리 이상이어야 합니다"
  ),
});

const Main: React.FC = () => {
  const [showPostcode, setShowPostcode] = useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event:MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowPostcode(false);
    }
  };

  React.useEffect(() => {
    // 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <MainDiv>
      <Formik
        initialValues={{
          id: "",
          password: "",
          email: "",
          phoneNumber: "",
          nickName: "",
          address: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            {formFields.map((field) => (
              <ForminputDiv key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <FieldWithButtonDiv>
                  <Field
                    type={field.type}
                    name={field.name}
                    className="rounded-lg mt-2 mb-2 w-full border-solid border-2 h-10 mr-1"
                    style={{ borderColor: MAIN_LIGHT_COLOR }}
                  />
                  {["id", "nickName"].includes(field.name) && (
                    <button
                      type="button"
                      className="rounded-lg border-solid border-main-light-color border-2 text-[10px] w-16 h-10 mt-2 mr-2 "
                    >
                      중복확인
                    </button>
                  )}
                </FieldWithButtonDiv>
                {["id", "password"].includes(field.name) && (
                  <ErrorMessage
                    name={field.name}
                    component={StyledErrorMessage}
                    className="error-message"
                  />
                )}
              </ForminputDiv>
            ))}
            <ForminputDiv>
              <label htmlFor="adress">주소</label>
              <Field
                type="text"
                name="address"
                placeholder="주소창을 클릭하세요"
                className="rounded-lg mt-2 mb-2 w-full border-solid border-2 h-10 mr-1"
                style={{ borderColor: MAIN_LIGHT_COLOR }}
                onClick={() => setShowPostcode(true)}
              />
              {showPostcode && (
                <div ref={modalRef}>
                <Postcode
                  onAddressSelect={(address) => {
                    setFieldValue("address", address);
                    setShowPostcode(false);
                  }}
                />
              </div>
              )}
            </ForminputDiv>
            <button
              type="submit"
              className="w-[100%] h-10 bg-main-color rounded-lg text-[17px] text-[#ffffff] mt-2 "
            >
              등록하기
            </button>
          </Form>
        )}
      </Formik>
    </MainDiv>
  );
};

export default Main;
const MainDiv = styled.div`
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

const FieldWithButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledErrorMessage = styled.div`
  color: red; // 에러 메시지의 색상을 빨간색으로 설정
  font-size: 12px; // 폰트 크기를 12px로 설정
  margin-top: 2px;
  margin-bottom: 6px;
`;
