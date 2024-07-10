import React from "react";

const LoginRequiredMessage = () => {
  return (
    <>
      <h1 className="text-lg text-MAIN_COLOR">로그인이 필요한 서비스입니다.</h1>
      <p className="text-MAIN_LIGHT_COLOR mt-4">
        꼬순내를 방문해주셔서 감사합니다. 서비스 이용을 위해 로그인이
        필요합니다.
      </p>
      <p className="text-MAIN_LIGHT_COLOR mb-4">
        지금 회원이 되시면 다양한 서비스를 편리하게 이용하실 수 있습니다.
      </p>
    </>
  );
};

export default LoginRequiredMessage;
