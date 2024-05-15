import React from "react";
import { Link } from "react-router-dom";
import { PiPawPrintLight } from "react-icons/pi";

const MyPagePetAdd: React.FC = (props) => {
  return (
    <div className="flex items-center border-2 border-dashed border-MAIN_LIGHT_COLOR rounded-2xl w-full h-full">
      <div className="flex justify-start items-center px-5 py-3 gap-3">
        <Link
          to=""
          className="flex flex-col items-center border-2 border-dashed border-MAIN_LIGHT_COLOR rounded-full bg-MAIN_GRAY gap-2 px-6 py-3"
        >
          <PiPawPrintLight color="#816F6B" size="30px" />
          <div className="text-MAIN_LIGHT_COLOR text-xs text-center">
            <div>반려동물</div>
            <div>추가</div>
          </div>
        </Link>
        <div>
          <div className="text-MAIN_LIGHT_COLOR">
            <div>이효경님과 함께 사는</div>
            <div>꼬순내는 어떤 친구인가요? 🤔</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPagePetAdd;
