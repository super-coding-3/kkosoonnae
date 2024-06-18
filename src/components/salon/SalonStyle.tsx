import React from "react";
import SalonStyleCard from "./SalonStyleCard";

const SalonStyle: React.FC = () => {
  return (
    <div className="mt-4 pb-3">
      <div className=" border-b-[1px] border-gray-200 py-2 mb-2">
        <h3 className="text-lg text-black">스타일</h3>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <SalonStyleCard />
      </div>
    </div>
  );
};

export default SalonStyle;
