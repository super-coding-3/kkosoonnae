import React from 'react';

const formFields =  [
    {
      name: "id",
      label: "아이디",
      type: "text",
      placeholder: "아이디를 입력하세요",
    },
    {
      name: "password",
      label: "패스워드",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
    {
      name: "email",
      label: "이메일",
      type: "email",
      placeholder: "이메일을 입력하세요",
    },
    {
      name: "phoneNumber",
      label: "핸드폰번호",
      type: "tel",
      placeholder: "전하번호를 입력하세요",
    },
    {
      name: "nickName",
      label: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력하세요",
    },
    {
      name: "postCode",
      label: "상세주소",
      type: "text",
      placeholder: "우편번호",
    },
    { name: "address", type: "text", placeholder: "기본주소" },
    { name: "addressDetail", type: "text", placeholder: "상세주소" },
  ];

export default formFields;