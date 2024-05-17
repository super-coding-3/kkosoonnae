import { Modal } from "flowbite-react";
import SubmitBtn from "../common/SubmitBtn";

interface QnAModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const QnAModal: React.FC<QnAModalProps> = (props) => {
  return (
    <>
      <Modal
        show={props.openModal}
        size="md"
        onClose={() => props.setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col items-center text-center gap-3">
            <img className="size-20" src="/img/common/icon-dog_star.svg" />
            <div className="text-lg font-bold">문의 접수가 완료되었습니다.</div>
            <div className="text-gray-400">
              접수하신 내용은 최대한 빠르게 답변드리겠습니다.
            </div>
            <SubmitBtn value="확인" onclick={() => props.setOpenModal(false)} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QnAModal;
