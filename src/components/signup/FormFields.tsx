const formFields =  [
    {
      name: "loginId",
      label: "아이디",
      type: "text",
      placeholder: "아이디를 입력하세요",
    },
    {
      name: "password",
      label: "비밀번호",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
    {
      name: "passwordCheck",
      label: "비밀번호 확인",
      type: "password",
      placeholder: "비밀번호를 확인합니다",
    },
    {
      name: "email",
      label: "이메일",
      type: "email",
      placeholder: "이메일을 입력하세요",
    },
    {
      name: "phone",
      label: "핸드폰번호",
      type: "tel",
      placeholder: "핸드폰번호를 입력하세요",
    },
    {
      name: "nickName",
      label: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력하세요",
    },
    {
      name: "zipCode",
      label: "상세주소",
      type: "text",
      placeholder: "우편번호",
    },
    { name: "address", type: "text", placeholder: "기본주소" },
    { name: "addressDtl", type: "text", placeholder: "상세주소" },
  ];

export default formFields;