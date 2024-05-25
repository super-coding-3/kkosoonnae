import HttpClient from "../utils/api/customAxios";

import React from "react";
import { Formik, Form } from "formik";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import ImgMyPet from "../components/mypet/ImgMyPet";
import InputMyPet from "../components/mypet/InputMyPet";
import BtnMyPetGender from "../components/mypet/BtnMyPetGender";
import { EditMyPetSchema } from "../schema/formSchema";
import CustomDatePickerMyPet from "../components/mypet/CustomDatePickerMyPet";

interface MyPetInfosType {
  img: string;
  name: string;
  type: string;
  birthDt: Date;
  gender: string;
  weight: string;
}

const AddMyPet: React.FC = () => {
  const handleFormSubmit = async (values: MyPetInfosType) => {
    function CF_leftPad(value: number) {
      if (Number(value) >= 10) {
        return value;
      }
      return "0" + value;
    }

    const birthDtYear = values.birthDt.getFullYear();
    const birthDtMonth = CF_leftPad(values.birthDt.getMonth() + 1);
    const birthDtDay = CF_leftPad(values.birthDt.getDate());
    const birthDtValues = [birthDtYear, birthDtMonth, birthDtDay].join("-");

    const valuesReq = {
      img: values.img,
      name: values.name,
      type: values.type,
      birthDt: birthDtValues,
      gender: values.gender,
      weight: values.weight,
    };

    await HttpClient.post("/KkoSoonNae/pet/addPet", valuesReq)
      .then((response) => {
        alert("등록이 완료되었습니다");
        window.location.href = "/mypage";
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  const initialValues = {
    img: "string",
    name: "",
    type: "",
    birthDt: new Date(),
    gender: "남아",
    weight: "",
  };

  return (
    <OuterLayout>
      <PageTitle title="내꼬순내 등록" leftBtn={true} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={EditMyPetSchema}
        enableReinitialize={true}
      >
        {({ setFieldValue, values }) => (
          <Form className="mt-5 pb-24 mx-4 font-bold">
            <ImgMyPet img={values.img} />
            <InputMyPet name="name" placeholder="내 꼬순내 이름" />
            <InputMyPet name="type" placeholder="내 꼬순내 종" />
            <DatePicker
              locale={ko}
              selected={values.birthDt}
              dateFormat="yyyy년 MM월 dd일"
              shouldCloseOnSelect
              popperPlacement="bottom"
              onChange={(date) => setFieldValue("birthDt", date)}
              customInput={<CustomDatePickerMyPet />}
            />
            <div className="flex justify-between gap-2 mt-3">
              <BtnMyPetGender
                gender={values.gender}
                btnValue="남아"
                setFieldValue={setFieldValue}
              />
              <BtnMyPetGender
                gender={values.gender}
                btnValue="여아"
                setFieldValue={setFieldValue}
              />
            </div>
            <InputMyPet name="weight" placeholder="내 꼬순내 몸무게" />
            <BtnSubmit value="등록하기" type="submit" />
          </Form>
        )}
      </Formik>
      <Nav />
    </OuterLayout>
  );
};

export default AddMyPet;
