import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";

interface MyPagePetInfoProps {
  petNo?: number;
  img: string;
  name: string;
  type: string;
  age: string;
  gender: string;
  weigth: string;
  mainPet: string;
  representative: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyPagePetInfo: React.FC<MyPagePetInfoProps> = (props) => {
  const { storeNo } = useParams<{ storeNo: string }>();
  const location = useLocation();

  return (
    <div className="border-2 border-solid border-MAIN_LIGHT_COLOR rounded-2xl w-full h-40 infopet-fragment-size-change">
      <div className="flex justify-between items-center px-5 py-3 gap-5 w-full h-28 infopet-wrap-size-change">
        <div className="flex items-center gap-5 infopet-flex-direction">
          <img
            className="rounded-full size-24 border-2 border-MAIN_LIGHT_COLOR"
            src={props.img}
          />
          <div className="flex flex-col gap-1 w-36 infopet-allinfo-size-change">
            <div className="flex items-center gap-1">
              <div className="text-lg font-bold truncate">{props.name}</div>
              {props.gender == "여아" ? (
                <p className="infopet-gender-hidden">
                  <TbGenderFemale color="#e91e63" size="20px" />
                </p>
              ) : (
                <p className="infopet-gender-hidden">
                  <TbGenderMale color="#004fe5" size="20px" />
                </p>
              )}
            </div>
            <div className="text-gray-400 infopet-additionalinfo-hidden">
              {props.type}
            </div>
            <div className="text-gray-400 infopet-additionalinfo-hidden">
              {props.age} • {props.weigth}kg
            </div>
          </div>
        </div>
        <div className="flex h-full items-start">
          {props.mainPet == "Y" && (
            <label className="bg-MAIN_COLOR rounded-xl text-MAIN_GRAY px-2 py-1 text-sm">
              대표
            </label>
          )}
          {props.representative && props.mainPet == "N" && (
            <button
              className="border-2 border-solid border-MAIN_LIGHT_COLOR text-MAIN_LIGHT_1COL1OR rounded-xl px-2 py-1 text-sm"
              onClick={props.onClick}
            >
              선택
            </button>
          )}
        </div>
      </div>
      <div className="w-full leading-10 text-center border-t-2 border-solid border-MAIN_LIGHT_COLOR">
        {location.pathname === `/reservation/${storeNo}` ? (
          <Link to="/editmykkosoonae">선택하기</Link>
        ) : (
          <Link to={"/editmykkosoonae/" + props.petNo}>수정하기</Link>
        )}
      </div>
    </div>
  );
};

export default MyPagePetInfo;
