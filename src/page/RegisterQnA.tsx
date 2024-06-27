import React, { useState } from "react";

import RegisterQnAForm from "../components/registerqna/RegisterQnAForm";
import PageComplete from "../components/common/PageComplete";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import { ROUTER_PATH } from "../constants/constants";

const RegisterQnA: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <OuterLayout>
      <PageTitle title="문의하기" leftBtn={true} />
      {step === 1 && <RegisterQnAForm setStep={setStep} />}
      {step === 2 && (
        <PageComplete
          title="문의 접수가 완료되었습니다"
          description="접수하신 내용은 최대한 빠르게 답변드리겠습니다"
          btnValue="확인"
          link={ROUTER_PATH.myQnA}
        />
      )}
      <Nav />
    </OuterLayout>
  );
};

export default RegisterQnA;
