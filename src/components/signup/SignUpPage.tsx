import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { SignupSchema } from "../../schema/formSchema";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Postcode from "../common/PostCode";
import formFields from "./FormFields";
import HttpClient from "../../utils/api/customAxios";
import CheckAvailabilityApi from "../common/CheckAvailabilityApi";
import ToastMessage from "../common/ToastMessage";
// 메인 코드

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [showPostcode, setShowPostcode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <MainDiv className="px-4">
      {toastMessage && <ToastMessage message={toastMessage} />}
      <Formik
        initialValues={{
          Id: "",
          SignUpPassword: "",
          SignUpPasswordCheck: "",
          SignUpEmail: "",
          SignUpPhoneNumber: "",
          NickName: "",
          SignUpPostCode: "",
          SignUpAddress: "",
          SignUpAddressDetail: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            loginId: values.Id,
            email: values.SignUpEmail,
            password: values.SignUpPassword,
            phone: values.SignUpPhoneNumber,
            nickName: values.NickName,
            zipCode: values.SignUpPostCode,
            address: values.SignUpAddress,
            addressDtl: values.SignUpAddressDetail,
          };
          HttpClient.post("/KkoSoonNae/customer/signUp", payload)
            .then((response) => {
              setToastMessage("회원가입이 완료되었습니다!");
              const res = response.data;
              console.log(res);
              setTimeout(() => {
                navigate("/");
              }, 1000); // 1초 후에 페이지 이동
            })
            .catch((error) => {
              setTimeout(() => {
                setToastMessage(error.response.data.message);
              }, 2000);
            });
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="mx-auto max-w-xl min-w-[320px] w-full">
            {formFields.map((field) => (
              <ForminputDiv key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <FieldWithButtonDiv>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="rounded-lg mt-2 mb-1 w-full border-solid border-2 h-10 border-MAIN_LIGHT_COLOR"
                  />
                  {["Id", "NickName"].includes(field.name) && (
                    <button
                      type="button"
                      onClick={() =>
                        CheckAvailabilityApi(
                          field.name as "Id" | "NickName",
                          values[field.name as "Id" | "NickName"]
                        )
                      }
                      className="rounded-lg border-solid border-main-light-color border-2 text-[10px] w-16 h-10 mt-2 ml-1"
                    >
                      중복확인
                    </button>
                  )}
                  {["SignUpPostCode"].includes(field.name) && (
                    <button
                      type="button"
                      onClick={() => setShowPostcode(true)}
                      className="rounded-lg border-solid border-main-light-color border-2 text-[10px] w-16 h-10 mt-2 ml-1"
                    >
                      주소찾기
                    </button>
                  )}
                </FieldWithButtonDiv>
                <ErrorMessage
                  name={field.name}
                  render={(msg) => (
                    <div className="text-xs ml-2 mb-1 text-red-600">{msg}</div>
                  )}
                />
              </ForminputDiv>
            ))}
            <Postcode
              onAddressSelect={(addressData) => {
                setFieldValue("SignUpPostCode", addressData.postCode);
                setFieldValue("SignUpAddress", addressData.address);
                setFieldValue("SignUpAddressDetail", addressData.addressDetail);
              }}
              showPostcode={showPostcode}
              setShowPostcode={setShowPostcode}
            />
            <button
              type="submit"
              className="w-full max-w-l bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
            >
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
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const ForminputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FieldWithButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
