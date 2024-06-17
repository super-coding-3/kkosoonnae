import { useState } from "react";
import { ErrorMessage, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { CiCalendar } from "react-icons/ci";

interface FormValues {
  reservationDate: string;
  [key: string]: any;
}

interface ReservationDatepickerProps {
  label: string;
  name: string;
}

function ReservationDatepicker({ label, name }: ReservationDatepickerProps) {
  const today = new Date();
  const [reservationDate, setReservationDate] = useState<Date>(today);
  const { setFieldValue } = useFormikContext<FormValues>();

  return (
    <div className="flex items-center">
      <label htmlFor={name} className="w-[80px] text-black text-sm">
        {label}
      </label>
      <div className="relative" style={{ width: "calc(100% - 80px)" }}>
        <CiCalendar className="text-gray absolute h-[20px] w-[20px] left-1 top-3" />
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={reservationDate}
          onChange={(date: Date) => {
            setReservationDate(date);
            setFieldValue(name, date.toISOString().slice(0, 10));
          }}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs text-red-600"
      />
    </div>
  );
}

export default ReservationDatepicker;
