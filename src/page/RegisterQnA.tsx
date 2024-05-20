import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import { Link } from "react-router-dom";
import RegisterQnALabelInput from "../components/registerqna/RegisterQnALabelInput";
import SubmitBtn from "../components/common/SubmitBtn";
import { useState } from "react";
import QnAModal from "../components/registerqna/QnAModal";

const RegisterQnA: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <OuterLayout>
      <PageTitle title="문의하기" leftBtn={true} />
      <div className="mt-5 mx-5">
        <div className="flex justify-between items-center pb-3 border-b-2 border-COMMONN_BORDER_GRAY">
          <div className="font-bold text-xl">꼬순내 고객센터</div>
          <Link
            to="/myqna"
            className="bg-MAIN_COLOR text-MAIN_IVORY rounded-lg h-fit w-fit py-1 px-2"
          >
            내 문의내역
          </Link>
        </div>
        <RegisterQnALabelInput
          title="문의 제목"
          placeholder="제목을 입력해주세요. (20자 이내)"
          height={10}
        />
        <RegisterQnALabelInput
          title="문의 내용"
          placeholder="내용을 입력해주세요."
          height={40}
        />
        <SubmitBtn value="문의하기" onclick={() => setOpenModal(true)} />
        <QnAModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default RegisterQnA;
