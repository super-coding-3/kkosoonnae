import HttpClient from "../../utils/api/customAxios";
import React from "react";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "../../schema/formSchema";
import { useNavigate } from "react-router-dom";

import Postcode from "../common/PostCode";
import formFields from "./FormFields";
import CheckAvailabilityApi from "../common/CheckAvailabilityApi";
import ToastMessage from "../common/ToastMessage";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPostcode, setShowPostcode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [doubleCheck, setDoubleCheck] = useState<string>("noProgress");

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-2 font-bold text-sm max-w-[640px] min-w-[375px] mx-auto p-4">
      {toastMessage && <ToastMessage message={toastMessage} />}
      <Formik
        initialValues={{
          loginId: "",
          password: "",
          passwordCheck: "",
          email: "",
          phone: "",
          nickName: "",
          zipCode: "",
          address: "",
          addressDtl: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            loginId: values.loginId,
            email: values.email,
            password: values.password,
            phone: values.phone,
            nickName: values.nickName,
            zipCode: values.zipCode,
            address: values.address,
            addressDtl: values.addressDtl,
          };
          if (doubleCheck === "noProgress") {
            setToastMessage("닉네임 중복확인을 진행해주세요");
            setTimeout(() => {
              setToastMessage(null);
            }, 1000);
          } else if (doubleCheck === "complete") {
            HttpClient.post("/api/customer/signUp", payload)
              .then((response) => {
                setToastMessage("회원가입이 완료되었습니다!");
                setTimeout(() => {
                  navigate("/");
                }, 800);
              })
              .catch((error) => {
                setTimeout(() => {
                  setToastMessage(error.response.data.message);
                }, 800);
              });
            setSubmitting(false);
          }
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="w-full">
            {formFields.map((field) => (
              <div key={field.name} className="flex flex-col w-full">
                <label className="mt-1" htmlFor={field.name}>
                  {field.label}
                </label>
                <div className="flex flex-row w-full">
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="rounded-lg mt-2 mb-1 w-full border-2 border-solid border-MAIN_LIGHT_COLOR h-10"
                  />
                  {["loginId", "nickName"].includes(field.name) && (
                    <button
                      type="button"
                      onClick={() => {
                        setToastMessage(null);
                        CheckAvailabilityApi(
                          field.name as "loginId" | "nickName",
                          values[field.name as "loginId" | "nickName"],
                          setToastMessage,
                          setDoubleCheck
                        );
                      }}
                      className="rounded-lg border-2 border-solid border-main-light-color text-xs w-16 h-10 mt-2 ml-1"
                    >
                      중복확인
                    </button>
                  )}
                  {["zipCode"].includes(field.name) && (
                    <button
                      type="button"
                      onClick={() => setShowPostcode(true)}
                      className="rounded-lg border-2 border-solid border-MAIN_LIGHT_COLOR text-xs w-16 h-10 mt-2 ml-1"
                    >
                      주소찾기
                    </button>
                  )}
                </div>
                <ErrorMessage
                  name={field.name}
                  render={(msg) => (
                    <div className="text-xs ml-2 mb-1 text-red-600">{msg}</div>
                  )}
                />
              </div>
            ))}
            <Postcode
              onAddressSelect={(addressData) => {
                setFieldValue("zipCode", addressData.postCode);
                setFieldValue("address", addressData.address);
                setFieldValue("addressDtl", addressData.addressDetail);
              }}
              showPostcode={showPostcode}
              setShowPostcode={setShowPostcode}
            />
            <button
              type="submit"
              className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
            >
              제출하기
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
