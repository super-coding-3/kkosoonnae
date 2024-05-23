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

const Regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const phoneRegex = /[0-9]{3}-[0-9]{4}-[0-9]{4}/;

const SignupSchema = Yup.object().shape({
  id: Yup.string()
    .matches(
      Regex,
      "아이디는 숫자,대문자, 특수문자 를 포함한 6자리 이상이어야 합니다"
    )
    .required("아이디는 필수입니다"),

  password: Yup.string()
    .matches(
      Regex,
      "비밀번호는 숫자,대문자, 특수문자 를 포함한 6자리 이상이어야 합니다"
    )
    .required("비밀번호는 필수입니다"),
  email: Yup.string()
    .email("올바른 이메일 형식을 입력하세요")
    .required("이메일은 필수입니다."),
  phoneNumber: Yup.string().required("핸드폰번호는 필수입니다."),
  nickName: Yup.string().required("닉네임은 필수입니다."),
  postCode: Yup.string().required("우편번호는 필수입니다."),
  address: Yup.string().required("기본주소는 필수입니다."),
  addressDetail: Yup.string().required("상세주소는 필수입니다."),
});

const LoginSchema = Yup.object().shape({
  id: Yup.string().required("아이디를 입력해주세요"),
  password: Yup.string().required("비밀번호를 입력해주세요"),
});

const EditProfileSchema = Yup.object().shape({
  nickName: Yup.string().required("닉네임을 입력해주세요"),
  phone: Yup.string()
    .matches(
      phoneRegex,
      "전화번호 형식에 맞지 않습니다. 000-0000-0000 형식으로 입력해주세요."
    )
    .required("전화번호를 입력해주세요"),
  zipCode: Yup.string().required("우편번호를 입력해주세요"),
  address: Yup.string().required("주소를 입력해주세요"),
  addressDtl: Yup.string().required("상세주소를 입력해주세요"),
});

const QnASchema = Yup.object().shape({
  title: Yup.string()
    .required("제목을 입력해주세요")
    .max(20, "최대 20자까지 작성 가능합니다"),
  contents: Yup.string()
    .required("내용을 입력해주세요")
    .min(20, "최소 20자 이상 작성해야 합니다."),
});

export {
  reservationSchema,
  SignupSchema,
  LoginSchema,
  EditProfileSchema,
  QnASchema,
};
