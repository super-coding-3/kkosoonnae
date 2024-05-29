import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import ImgMyPet from "../components/mypet/ImgMyPet";
import InputMyPet from "../components/mypet/InputMyPet";

import { Form, Formik } from "formik";
import { EditMyPetSchema } from "../schema/formSchema";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePickerMyPet from "../components/mypet/CustomDatePickerMyPet";
import { MYPET_FORM_LABEL } from "../constants/constants";
import SelectMyPetGender from "../components/mypet/SelectMyPetGender";
import ModalDelete from "../components/common/ModalDelete";
import ToastMessage from "../components/common/ToastMessage";

interface MyPetInfosType {
  name: string;
  type: string;
  birthDt: Date;
  gender: string;
  weight: string;
  petImg: string;
}

const EditMyPet: React.FC = () => {
  const { petNo } = useParams() as { petNo: string };
  const [previewImg, setPreviewImg] = useState<string | undefined>("");
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [myPetInfos, setMyPetInfos] = useState<MyPetInfosType>({
    name: "",
    type: "",
    birthDt: new Date(),
    gender: "",
    weight: "",
    petImg: "",
  });

  const handleFormSubmit = async (values: MyPetInfosType) => {
    if (previewImg) {
      const requestValues = new FormData();
      const petUpdateValues = JSON.stringify({
        name: values.name,
        type: values.type,
        birthDt: values.birthDt,
        gender: values.gender,
        weight: values.weight,
      });
      const petUpdateDatas = new Blob([petUpdateValues], {
        type: "application/json",
      });
      requestValues.append("petUpdate", petUpdateDatas);
      requestValues.append("petImg", previewImg);

      await HttpClient.put(
        `/KkoSoonNae/pet/update/${parseInt(petNo)}`,
        requestValues
      )
        .then((response) => {
          setToastMessage(`${values.name}의 정보가 수정되었습니다`);
          setTimeout(function () {
            window.location.href = "/mypage";
          }, 1000);
        })
        .catch((error: any) => {
          alert(error);
        });
    } else {
      setToastMessage("반려동물의 이미지를 넣어주세요");
      setTimeout(function () {
        setToastMessage(null);
      }, 3000);
      return;
    }
  };
  const getMyPet = async (petNo: number) => {
    const res = await HttpClient.get(`/KkoSoonNae/pet/pet-list/${petNo}`);
    return res.data;
  };

  const handlerClickDelete = () => {
    setShowModalDelete(true);
  };

  const deleteMyPetDatas = async (petNo: number, petName: string) => {
    await HttpClient.delete(`/KkoSoonNae/pet/deletePet/${petNo}`)
      .then((response) => {
        if (response.data.message == "해당 반려동물은 현재 예약 상태입니다.") {
          setShowModalDelete(false);
          setToastMessage(
            `${petName}은 미용이 예약되어 있어 삭제할 수 없습니다`
          );
          setTimeout(function () {
            setToastMessage(null);
          }, 3000);
        } else {
          setShowModalDelete(false);
          setToastMessage(`${petName}의 정보가 삭제되었습니다`);
          setTimeout(function () {
            window.location.href = "/mypage";
          }, 1000);
        }
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  useEffect(() => {
    const setParam = parseInt(petNo);

    const fetchPet = async (petNo: number) => {
      const resPetData = await getMyPet(petNo);

      const petData = {
        name: resPetData.name,
        type: resPetData.type,
        birthDt: resPetData.birthDt,
        gender: resPetData.gender,
        weight: resPetData.weight,
        petImg: resPetData.img,
      };

      setMyPetInfos(petData);
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
          <Form className="pt-4 pb-24 px-4 font-bold">
            <ImgMyPet
              img={values.petImg}
              setFieldValue={setFieldValue}
              setPreviewImg={setPreviewImg}
            />
            <InputMyPet name="name" label={MYPET_FORM_LABEL.name} />
            <InputMyPet name="type" label={MYPET_FORM_LABEL.type} />
            <CustomDatePickerMyPet
              selected={values.birthDt}
              onChange={(date) => setFieldValue("birthDt", date)}
            />
            <SelectMyPetGender
              gender={values.gender}
              btnValue="남아"
              setFieldValue={setFieldValue}
            />
            <InputMyPet name="weight" label={MYPET_FORM_LABEL.weight} />
            <BtnSubmit value="수정하기" type="submit" />
            <button
              type="button"
              className="w-full text-right mt-3 underline text-gray-400"
              onClick={handlerClickDelete}
            >
              {values.name}의 정보 삭제하기
            </button>
            <ModalDelete
              showModalDelete={showModalDelete}
              setShowModalDelete={setShowModalDelete}
              onClick={() => {
                deleteMyPetDatas(parseInt(petNo), values.name);
              }}
              description={`${values.name}의 정보를 삭제하시겠습니까?`}
              delBtnValue="삭제"
              cancelBtnValue="취소"
            />
            {toastMessage && <ToastMessage message={toastMessage} />}
          </Form>
        )}
      </Formik>
      <Nav />
    </OuterLayout>
  );
};

export default EditMyPet;
