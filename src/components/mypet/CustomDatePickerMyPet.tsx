import React from "react";

const CustomDatePickerMyPet: React.FC = ({ value, onClick }: any) => {
  return (
    <div className="mt-3">
      <button
        className="h-10 p-2.5 w-full border-2 text-gray-500 text-start border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default CustomDatePickerMyPet;
