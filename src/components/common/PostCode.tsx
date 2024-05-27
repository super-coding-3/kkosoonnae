import React from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "flowbite-react";
interface PostcodeProps {
  onAddressSelect: (addressData: {
    postCode: string;
    address: string;
    addressDetail: string;
  }) => void;
  showPostcode: boolean;
  setShowPostcode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Postcode: React.FC<PostcodeProps> = ({
  onAddressSelect,
  showPostcode,
  setShowPostcode,
}) => {
  const handleComplete = (data: any) => {
    const addressData = {
      postCode: data.zonecode,
      address: data.address,
      addressDetail:"",
    };

    onAddressSelect(addressData);
    setShowPostcode(false);
  };

  return (
    <>
      <Modal
        dismissible
        size="sm"
        show={showPostcode}
        onClose={() => setShowPostcode(false)}
      >
        <Modal.Header>
          <div className="min-w-20 inline-block text-base text-center">
            우편번호 찾기
          </div>
        </Modal.Header>
        <Modal.Body>
          <DaumPostcode onComplete={handleComplete} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Postcode;
