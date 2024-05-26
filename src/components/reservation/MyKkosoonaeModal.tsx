import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import { Avatar } from "flowbite-react";
import HttpClient from "../../utils/api/customAxios";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";

interface MyKkosoonaeModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

interface MypetInfo {
  petNo: number;
  img: string;
  name: string;
  type: string;
  birthDt: string;
  gender: string;
  weight: string;
}

const MyKkosoonaeModal: React.FC<MyKkosoonaeModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [petInfo, setPetInfo] = useState<MypetInfo[]>([]);

  const getPetInfo = async () => {
    const { data } = await HttpClient.get<MypetInfo[]>(
      "/KkoSoonNae/pet/allPet-list"
    );
    setPetInfo(data);
    return data;
  };

  useEffect(() => {
    getPetInfo();
  }, []);

  const handlePetSelect = (pet: MypetInfo) => {
    console.log(pet.name, pet.type, pet.weight);
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
                className="border border-gray-400 rounded mb-2 flex gap-4 px-2 py-2"
              >
                <Avatar img={pet.img} size="lg" alt={pet.name} rounded />
                <div>
                  <h3 className="text-lg font-bold">{pet.name}</h3>
                  <p className="text-xs text-gray-400 to-MAIN_COLOR">
                    종 {pet.type}
                  </p>
                  <p className="text-xs text-gray-400">
                    생년월일: {pet.birthDt}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center">
                    성별:
                    {pet.gender == "여아" ? (
                      <TbGenderFemale color="#e91e63" size="20px" />
                    ) : (
                      <TbGenderMale color="#004fe5" size="20px" />
                    )}
                  </p>
                  <p className="text-xs text-gray-400">
                    몸무게: {pet.weight} kg
                  </p>
                </div>
                <button onClick={() => handlePetSelect(pet)}>선택하기</button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyKkosoonaeModal;
