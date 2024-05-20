import React from "react";
import { Modal } from "flowbite-react";
import MyPagePetInfo from "../../components/mypage/MyPagePetInfo";

interface MyKkosoonaeModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const MyKkosoonaeModal: React.FC<MyKkosoonaeModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>내 꼬순내 정보 불러오기</Modal.Header>
        <Modal.Body>
          <div>
            <MyPagePetInfo
              img="https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=128"
              name="샤샤"
              type="샴"
              age="18년 1개월"
              gender="여아"
              weigth="3kg"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyKkosoonaeModal;
