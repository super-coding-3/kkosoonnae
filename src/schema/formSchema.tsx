import * as Yup from "yup";

const reservationSchema = Yup.object().shape({
  salonName: Yup.string().required("업체명을 입력해주세요."),
  reservationDate: Yup.date().nullable().required("예약일자를 선택해주세요."),
  reservationTime: Yup.string().required("예약시간을 선택해주세요."),
  style: Yup.string().required("스타일을 선택해주세요."),
  breed: Yup.string().required("견종/묘종을 입력해주세요."),
  weight: Yup.string().required("몸무게를 입력해주세요."),
  characteristics: Yup.string()
    .max(100, "특징은 최대 100자까지 입력 가능합니다.")
    .required("특징을 입력해주세요."),
});

export { reservationSchema };
