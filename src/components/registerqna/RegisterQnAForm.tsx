import React from "react";
import { Link } from "react-router-dom";
import RegisterQnAFormGroup from "./RegisterQnAFormGroup";
import BtnSubmit from "../common/BtnSubmit";
import { Form, Formik } from "formik";
import HttpClient from "../../utils/api/customAxios";
import { QnASchema } from "../../schema/formSchema";

interface RegisterQnAFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface QnAType {
  title: string;
  content: string;
}

const RegisterQnAForm: React.FC<RegisterQnAFormProps> = (props) => {
  const handleFormSubmit = (values: QnAType) => {
    HttpClient.post("/KkoSoonNae/qna/create", values)
      .then((response) => {
        props.setStep(2);
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  const initialValues = { title: "", content: "" };

  return (
    <div className="pt-4 px-4">
      <div className="flex justify-between items-center pb-3 border-b-2 border-COMMONN_BORDER_GRAY">
        <div className="font-bold text-xl">꼬순내 고객센터</div>
        <Link
          to="/myqna"
          className="bg-MAIN_COLOR text-MAIN_IVORY rounded-lg h-fit w-fit py-1 px-2"
        >
          내 문의내역
        </Link>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={QnASchema}
      >
        <Form>
          <RegisterQnAFormGroup
            label="문의 제목"
            component="input"
            name="title"
            placeholder="제목을 입력해주세요. (20자 이내)"
            height={10}
          />
          <RegisterQnAFormGroup
            label="문의 내용"
            component="textarea"
            name="content"
            placeholder="내용을 입력해주세요."
            height={40}
          />
          <BtnSubmit type="submit" value="문의하기" />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterQnAForm;
