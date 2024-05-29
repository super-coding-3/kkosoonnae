import React, { SyntheticEvent, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { MYPET_FORM_LABEL } from "../../constants/constants";

interface CustomDatePickerMyPetProps {
  selected: Date;
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => void;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomDatePickerMyPet: React.FC<CustomDatePickerMyPetProps> = (props) => {
  const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <button
        type="button"
        className="h-10 p-2.5 w-full border-2 text-gray-500 text-start border-COMMONN_BORDER_GRAY appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    )
  );

  return (
    <div className="flex flex-col mt-3 gap-2">
      <label className="font-bold pl-1">{MYPET_FORM_LABEL.birthDt}</label>
      <DatePicker
        locale={ko}
        selected={props.selected}
        dateFormat="yyyy년 MM월 dd일"
        shouldCloseOnSelect
        popperPlacement="bottom"
        onChange={props.onChange}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default CustomDatePickerMyPet;
