import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import ImgMyPet from "../components/mypet/ImgMyPet";
import InputMyPet from "../components/mypet/InputMyPet";
import BtnMyPetGender from "../components/mypet/BtnMyPetGender";

import { Form, Formik } from "formik";
import { EditMyPetSchema } from "../schema/formSchema";
import { useParams } from "react-router-dom";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MyPetInfosType {
  petNo: number;
  img: string;
  name: string;
  type: string;
  birthDt: Date;
  gender: string;
  weight: string;
}

const EditMyPet: React.FC = () => {
  const { petNo } = useParams() as { petNo: string };
  const [myPetInfos, setMyPetInfos] = useState<MyPetInfosType>({
    petNo: parseInt(petNo),
    img: "",
    name: "",
    type: "",
    birthDt: new Date(),
    gender: "",
    weight: "",
  });

  const handleFormSubmit = async (values: MyPetInfosType) => {
    await HttpClient.put(`/KkoSoonNae/pet/update/${values.petNo}`, values)
      .then((response) => {
        alert("수정이 완료되었습니다");
        window.location.href = "/mypage";
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  const getMyPet = async (petNo: number): Promise<MyPetInfosType> => {
    const res = await HttpClient.get(`/KkoSoonNae/pet/pet-list/${petNo}`);
    return res.data;
  };

  const deleteMyPetDatas = async (petNo: number) => {
    await HttpClient.delete(`/KkoSoonNae/pet/deletePet/${petNo}`)
      .then((response) => {
        alert("데이터가 삭제되었습니다");
        window.location.href = "/mypage";
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  useEffect(() => {
    const setParam = parseInt(petNo);

    const fetchPet = async (petNo: number) => {
      const petData = await getMyPet(petNo);
      setMyPetInfos(petData);
      console.log(petData);
    };

    fetchPet(setParam);
  }, []);

  const initialValues = myPetInfos;

  return (
    <OuterLayout>
      <PageTitle title="내꼬순내 수정" leftBtn={true} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={EditMyPetSchema}
        enableReinitialize={true}
      >
        {({ setFieldValue, values }) => (
          <Form className="mt-5 pb-24 mx-4 font-bold">
            <ImgMyPet img={values.img} />
            <InputMyPet name="name" />
            <InputMyPet name="type" />
            {/* <InputMyPet name="birthDt" /> */}
            <DatePicker
              locale={ko}
              selected={values.birthDt}
              dateFormat="yyyy-MM-dd"
              onChange={(date) => setFieldValue("birthDt", date)}
              customInput={<InputMyPet />}
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
            <InputMyPet name="weight" />
            <BtnSubmit value="수정하기" type="submit" />
            <button
              type="button"
              className="w-full text-right mt-3 underline text-gray-400"
              onClick={() => {
                deleteMyPetDatas(myPetInfos.petNo);
              }}
            >
              데이터 삭제하기
            </button>
          </Form>
        )}
      </Formik>
      <Nav />
    </OuterLayout>
  );
};

export default EditMyPet;
