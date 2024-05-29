import React, { useState, useEffect } from "react";
import { Modal, Avatar } from "flowbite-react";
import HttpClient from "../../utils/api/customAxios";

interface MyKkosoonaeModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  onPetSelect?: (petName: string, breed: string, weight: string) => void;
}

interface MypetInfo {
  petNumber: number;
  petName: string;
  breed: string;
  weight: string;
}

const MyKkosoonaeModal: React.FC<MyKkosoonaeModalProps> = ({
  openModal,
  setOpenModal,
  onPetSelect,
}) => {
  const [petInfo, setPetInfo] = useState<MypetInfo[]>([]);

  const getPetInfo = async () => {
    const { data } = await HttpClient.get<MypetInfo[]>(
      "KkoSoonNae/reservation/my-pet"
    );
    setPetInfo(data);
    return data;
  };

  useEffect(() => {
    getPetInfo();
  }, []);

  const handlePetSelect = (pet: MypetInfo) => {
    if (onPetSelect) {
      onPetSelect(pet.petName, pet.breed, pet.weight.toString());
    }
    setOpenModal(false);
  };

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>내 꼬순내 정보 불러오기</Modal.Header>
        <Modal.Body>
          <div>
            {petInfo.map((pet, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded mb-2 flex items-center gap-4 px-2 py-2"
              >
                <Avatar
                  img="/img/common/icon-dog_normal.svg"
                  size="lg"
                  alt={pet.petName}
                  rounded
                />
                <div className="w-32">
                  <h3 className="text-lg font-bold">{pet.petName}</h3>
                  <p className="text-xs text-gray-500 to-MAIN_COLOR">
                    견종/묘종 {pet.breed}
                  </p>

                  <p className="text-xs text-gray-500">
                    몸무게: {pet.weight} kg
                  </p>
                </div>
                <button
                  className="h-10 border border-gray-800 rounded text-xs text-gray-800 px-4 py-2"
                  onClick={() => handlePetSelect(pet)}
                >
                  선택하기
                </button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyKkosoonaeModal;
