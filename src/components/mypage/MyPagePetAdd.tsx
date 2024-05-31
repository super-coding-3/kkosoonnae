import React from "react";
import { Link } from "react-router-dom";
import { PiPawPrintLight } from "react-icons/pi";

interface MyPagePetAddProps {
  userName: string;
}

const MyPagePetAdd: React.FC<MyPagePetAddProps> = (props) => {
  return (
    <div className="flex items-center border-2 border-dashed border-MAIN_LIGHT_COLOR rounded-2xl w-full h-40 addpet-button-fragment-change">
      <div className="flex justify-start items-center px-5 py-3 gap-3 addpet-button-wrap-change">
        <Link
          to="/addmykkosoonae"
          className="flex flex-col  justify-center items-center border-2 border-dashed border-MAIN_LIGHT_COLOR rounded-full bg-MAIN_GRAY gap-2 px-6 py-3 addpet-button-change"
        >
          <PiPawPrintLight color="#816F6B" size="30px" />
          <div className="text-MAIN_LIGHT_COLOR text-xs text-center">
            <div>반려동물</div>
            <div>추가</div>
          </div>
        </Link>
        <div>
          <div className="text-MAIN_LIGHT_COLOR">
            <div className="addpet-description-hidden">
              {props.userName}님과 함께 사는
            </div>
            <div className="addpet-description-hidden">
              꼬순내는 어떤 친구인가요? 🤔
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPagePetAdd;
