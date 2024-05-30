import React from "react";
import { Modal } from "flowbite-react";
import BtnSubmit from "./BtnSubmit";

interface ModalDeleteProps {
  showModalDelete: boolean;
  setShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  description: string;
  delBtnValue: string;
  cancelBtnValue: string;
}

const ModalDelete: React.FC<ModalDeleteProps> = (props) => {
  return (
    <>
      <Modal
        dismissible
        size="sm"
        show={props.showModalDelete}
        onClose={() => props.setShowModalDelete(false)}
      >
        <div className="py-8 px-4 flex flex-col justify-center items-center h-full">
          <img
            src="/img/common/icon-dog-sitdown.svg"
            alt="꼬순내 로고"
            className="size-28"
          />
          <p className=" text-black text-sm  mt-4 mb-8">{props.description}</p>
          <div className="flex gap-3 w-full">
            <button
              className="w-full h-14 mt-3 border-2 border-solid border-MAIN_COLOR rounded-lg text-MAIN_COLOR text-lg "
              onClick={() => {
                props.setShowModalDelete(false);
              }}
            >
              {props.cancelBtnValue}
            </button>
            <BtnSubmit value={props.delBtnValue} onClick={props.onClick} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
