import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { EditMyPetSchema } from "../schema/formSchema";
import { useParams } from "react-router-dom";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import ImgMyPet from "../components/mypet/ImgMyPet";
import InputMyPet from "../components/mypet/InputMyPet";
import CustomDatePickerMyPet from "../components/mypet/CustomDatePickerMyPet";
import SelectMyPetGender from "../components/mypet/SelectMyPetGender";
import ModalDelete from "../components/common/ModalDelete";
import { MYPET_FORM_LABEL } from "../constants/constants";
import useAxios from "../hooks/useAxios";
import useToastMessage from "../hooks/useToastMessage";

interface MyPetInfosType {
  name: string;
  type: string;
  birthDt: Date;
  gender: string;
  weight: string;
  petImg: string;
  petImgData: string;
}

const EditMyPet: React.FC = () => {
  const { petNo } = useParams() as { petNo: string };
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const [myPetInfos, setMyPetInfos] = useState<MyPetInfosType>({
    name: "",
    type: "",
    birthDt: new Date(),
    gender: "",
    weight: "",
    petImg: "",
    petImgData: "",
  });

  // TODO : 로딩 처리
  const { isLoading, error, handleRequest } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const handleFormSubmit = async (values: MyPetInfosType) => {
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
    if (values.petImgData != null) {
      requestValues.append("petImg", values.petImgData);
    }

    handleRequest({
      url: `/api/user/pet/update/${parseInt(petNo)}`,
      method: "PUT",
      body: requestValues,
    });
    if (!error) {
      showToast({
        message: `${values.name}의 정보가 수정되었습니다`,
        action: () => {
          window.location.href = "/mypage";
        },
      });
    } else {
      showToast({
        message: "오류가 발생했습니다",
      });
    }
  };

  const handlerClickDelete = () => {
    setShowModalDelete(true);
  };

  const handleFormNotChange = (dirty: boolean) => {
    if (!dirty) {
      showToast({ message: "반려동물의 정보를 수정해주세요" });
    }
  };

  const deleteMyPetDatas = async (petNo: number, petName: string) => {
    const response = await handleRequest({
      url: `/api/user/pet/deletePet/${petNo}`,
      method: "DELETE",
    });
    if (!error) {
      if (response?.data.message === "해당 반려동물은 현재 예약 상태입니다.") {
        setShowModalDelete(false);
        showToast({
          message: `${petName}은 미용이 예약되어 있어 삭제할 수 없습니다`,
        });
      } else {
        setShowModalDelete(false);
        showToast({
          message: `${petName}의 정보가 삭제되었습니다`,
          action: () => {
            window.location.href = "/mypage";
          },
        });
      }
    } else {
      showToast({ message: "오류가 발생했습니다" });
    }
  };

  useEffect(() => {
    const setParam = parseInt(petNo);

    const fetchPet = async (petNo: number) => {
      const resPetData = await handleRequest({
        url: `/api/user/pet/pet-list/${petNo}`,
        method: "GET",
      });

      const petData = {
        name: resPetData?.data.name,
        type: resPetData?.data.type,
        birthDt: resPetData?.data.birthDt,
        gender: resPetData?.data.gender,
        weight: resPetData?.data.weight,
        petImg: resPetData?.data.img,
        petImgData: "",
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
        {({ setFieldValue, values, dirty }) => (
          <Form className="pt-4 pb-24 px-4 font-bold">
            <ImgMyPet img={values.petImg} setFieldValue={setFieldValue} />
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
            <BtnSubmit
              value="수정하기"
              type={dirty === true ? "submit" : "button"}
              active={dirty}
              onClick={() => {
                handleFormNotChange(dirty);
              }}
            />
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
            <Toast />
          </Form>
        )}
      </Formik>
      <Nav />
    </OuterLayout>
  );
};

export default EditMyPet;
