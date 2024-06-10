import HttpClient from "../utils/api/customAxios";

import React, { useState } from "react";
import { Formik, Form } from "formik";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import ImgMyPet from "../components/mypet/ImgMyPet";
import InputMyPet from "../components/mypet/InputMyPet";
import { EditMyPetSchema } from "../schema/formSchema";
import CustomDatePickerMyPet from "../components/mypet/CustomDatePickerMyPet";
import { MYPET_FORM_LABEL } from "../constants/constants";
import SelectMyPetGender from "../components/mypet/SelectMyPetGender";
import ToastMessage from "../components/common/ToastMessage";

interface MyPetInfosType {
  name: string;
  type: string;
  birthDt: Date;
  gender: string;
  weight: string;
  petImg: string;
  petImgData: string;
}

const AddMyPet: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleFormSubmit = async (values: MyPetInfosType) => {
    if (values.petImgData) {
      const requestValues = new FormData();
      const petAddDtoValues = JSON.stringify({
        name: values.name,
        type: values.type,
        birthDt: values.birthDt,
        gender: values.gender,
        weight: values.weight,
      });
      const petAddDtoDatas = new Blob([petAddDtoValues], {
        type: "application/json",
      });
      requestValues.append("petAddDto", petAddDtoDatas);
      requestValues.append("petImg", values.petImgData);

      await HttpClient.post("/api/pet/addPet", requestValues)
        .then(() => {
          setToastMessage(`${values.name}(이)가 등록되었습니다`);
          setTimeout(function () {
            window.location.href = "/mypage";
          }, 1000);
        })
        .catch((error: any) => {
          setToastMessage("오류가 발생했습니다");
          setTimeout(() => {
            setToastMessage(null);
          }, 1000);
        });
    } else {
      setToastMessage("반려동물의 이미지를 넣어주세요");
      setTimeout(function () {
        setToastMessage(null);
      }, 3000);
      return;
    }
  };

  const handleFormIsValid = (isValid: boolean) => {
    if (!isValid) {
      setToastMessage("반려동물의 정보를 올바르게 작성해주세요");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    }
  };

  const initialValues = {
    name: "",
    type: "",
    birthDt: new Date(),
    gender: "남아",
    weight: "",
    petImg: "",
    petImgData: "",
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
        {({ setFieldValue, values, isValid }) => (
          <Form className="pt-4 pb-24 px-4 font-bold">
            <ImgMyPet img={values.petImg} setFieldValue={setFieldValue} />
            <InputMyPet
              name="name"
              placeholder="내 꼬순내 이름을 입력해주세요."
              label={MYPET_FORM_LABEL.name}
            />
            <InputMyPet
              name="type"
              placeholder="내 꼬순내 종을 입력해주세요"
              label={MYPET_FORM_LABEL.type}
            />
            <CustomDatePickerMyPet
              selected={values.birthDt}
              onChange={(date) => setFieldValue("birthDt", date)}
            />
            <SelectMyPetGender
              gender={values.gender}
              btnValue="남아"
              setFieldValue={setFieldValue}
            />
            <InputMyPet
              name="weight"
              placeholder="내 꼬순내 몸무게를 입력해주세요."
              label={MYPET_FORM_LABEL.weight}
            />
            <BtnSubmit
              value="등록하기"
              type={isValid === true ? "submit" : "button"}
              active={isValid}
              onClick={() => {
                handleFormIsValid(isValid);
              }}
            />
            {toastMessage && <ToastMessage message={toastMessage} />}
          </Form>
        )}
      </Formik>
      <Nav />
    </OuterLayout>
  );
};

export default AddMyPet;
