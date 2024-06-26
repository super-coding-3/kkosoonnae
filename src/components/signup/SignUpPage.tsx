import React from "react";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "../../schema/formSchema";
import { useNavigate } from "react-router-dom";

import Postcode from "../common/PostCode";
import formFields from "./FormFields";
import CheckAvailabilityApi from "../common/CheckAvailabilityApi";
import useToastMessage from "../../hooks/useToastMessage";
import useAxios from "../../hooks/useAxios";
import { ROUTER_PATH } from "../../constants/constants";

interface SignUpType {
  loginId: string;
  email: string;
  password: string;
  phone: string;
  nickName: string;
  zipCode: string;
  address: string;
  addressDtl: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPostcode, setShowPostcode] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState<string>("noProgress");

  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const handleFormSubmit = (values: SignUpType) => {
    if (doubleCheck === "noProgress") {
      showToast({
        message: "닉네임 중복확인을 진행해주세요",
      });
    } else if (doubleCheck === "complete") {
      handleRequest({
        url: "/api/user/customer/signUp",
        method: "POST",
        body: values,
      });
      if (!error) {
        showToast({
          message: "회원가입이 완료되었습니다!",
          action: () => {
            navigate(ROUTER_PATH.login);
          },
        });
      } else {
        showToast({
          message: "오류가 발생했습니다",
        });
      }
    }
  };

  const initialValues = {
    loginId: "",
    password: "",
    passwordCheck: "",
    email: "",
    phone: "",
    nickName: "",
    zipCode: "",
    address: "",
    addressDtl: "",
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-2 font-bold text-sm max-w-[640px] min-w-[375px] mx-auto p-4">
      {Loading}
      <Toast />
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleFormSubmit}
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
                        CheckAvailabilityApi(
                          field.name as "loginId" | "nickName",
                          values[field.name as "loginId" | "nickName"],
                          showToast,
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
