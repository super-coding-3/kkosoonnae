import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import Postcode from "./PostCode";
import formFields from "./FormFields";
import { SignupSchema } from "../../schema/formSchema";



// 메인 코드

const Main: React.FC = () => {
  const [showPostcode, setShowPostcode] = useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
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
          postCode: "",
          address: "",
          addressDetail: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isValid, dirty }) => (
          <Form>
            {formFields.map((field) => (
              <ForminputDiv key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <FieldWithButtonDiv>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="rounded-lg mt-2 mb-2 w-full border-solid border-2 h-10 mr-1 border-MAIN_LIGHT_COLOR"
                  />
                  {["id", "nickName"].includes(field.name) && (
                    <button
                      type="button"
                      className="rounded-lg border-solid border-main-light-color border-2 text-[10px] w-16 h-10 mt-2 mr-2 "
                    >
                      중복확인
                    </button>
                  )}
                  {["postCode"].includes(field.name) && (
                    <button
                      type="button"
                      onClick={() => setShowPostcode(true)}
                      className="rounded-lg border-solid border-main-light-color border-2 text-[10px] w-16 h-10 mt-2 mr-2 "
                    >
                      주소찾기
                    </button>
                  )}
                </FieldWithButtonDiv>

                <ErrorMessage
                  name={field.name}
                  component={StyledErrorMessage}
                  className="error-message"
                />
                {showPostcode && (
                  <div ref={modalRef}>
                    <Postcode
                      onAddressSelect={(addressData) => {
                        setFieldValue("postCode", addressData.postCode);
                        setFieldValue("address", addressData.address);
                        setFieldValue(
                          "addressDetail",
                          addressData.addressDetail
                        );
                        setShowPostcode(false);
                      }}
                    />
                  </div>
                )}
              </ForminputDiv>
            ))}
            <button className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3">
              제출하기
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
