import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { reservationSchema } from "../../schema/formSchema";

import ReservationFormGroup from "./ReservationFormGroup";
import ReservationTimeRadio from "./ReservationTimeRadio";
import ReservationDropDown from "./ReservationDropDown";
import ReservationDatepicker from "./ReservationDatepicker";
import ReservationTextArea from "./ReservationTextArea";

import MyKkosoonaeModal from "./MyKkosoonaeModal";

interface ReservationFormProps {
  salonNamefix?: string;
}
interface reservationFormValues {
  salonName: string;
  reservationDate: Date | null;
  reservationTime: string;
  style: string;
  breed: string;
  weight: string;
  characteristics: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ salonNamefix }) => {
  const { id } = useParams();

  const initialValues: reservationFormValues = {
    salonName: salonNamefix || "",
    reservationDate: null,
    reservationTime: "",
    style: "",
    breed: "",
    weight: "",
    characteristics: "",
  };

  const handleSubmit = (values: reservationFormValues) => {
    // console.log(values);
    console.log(salonNamefix);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-end my-3 px-4">
        <BtnMyPetInfo onClick={() => setIsModalOpen(true)}>
          <img src="/img/common/icon-dog_star.svg" alt="" /> 정보불러오기
        </BtnMyPetInfo>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={reservationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="px-4 pt-4 pb-8">
            <div className="flex flex-col gap-y-5">
              {/* 업체명 */}
              <ReservationFormGroup
                label="업체명"
                name="salonName"
                value={salonNamefix}
                readOnly={true}
              />
              {/* 예약날짜 : Datepicker */}
              <ReservationDatepicker label="예약일자" name="reservationDate" />
              {/* 예약시간 */}
              <ReservationTimeRadio />
              {/* 스타일 */}
              <ReservationDropDown />
              {/* 견종/묘종 */}
              <ReservationFormGroup
                label="견종/묘종"
                name="breed"
                readOnly={false}
              />
              {/* 몸무게 */}
              <ReservationFormGroup
                label="몸무게"
                name="weight"
                readOnly={false}
              />
              {/* 특징 */}
              <ReservationTextArea label="특징" name="characteristics" />
            </div>

            <BtnSubmit type="submit" className="my-4 rounded">
              예약하기
            </BtnSubmit>
          </Form>
        )}
      </Formik>
      <MyKkosoonaeModal openModal={isModalOpen} setOpenModal={setIsModalOpen} />
    </div>
  );
};

const BtnMyPetInfo = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #492d28;
  color: #492d28;
  img {
    width: 38px;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  height: 44px;
  color: #fff;
  background: #492d28;
`;
export default ReservationForm;
