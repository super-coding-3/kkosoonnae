import React from "react";
import { Badge } from "flowbite-react";
import { CiClock2 } from "react-icons/ci";
import { useField, ErrorMessage, useFormikContext } from "formik";

function ReservationTimeRadio() {
  const [field] = useField("reservationTime");
  const { touched, errors, setFieldValue } = useFormikContext<{
    reservationTime: string;
  }>();
  const selectedTime = field.value;
  const timeOptions = ["10:00", "12:00", "14:00", "16:00", "18:00"];

  const handleTimeChange = (time: string) => {
    setFieldValue("reservationTime", time);
  };

  return (
    <div className="reservation-formgroup flex items-center">
      <label className="w-[80px] text-black text-sm">예약시간</label>
      <div style={{ width: "calc(100% - 80px)" }}>
        <div className="flex gap-2 overflow-x-scroll py-1">
          {timeOptions.map((time) => (
            <React.Fragment key={time}>
              <label htmlFor={`reservationTime-${time}`}>
                <input
                  type="radio"
                  id={`reservationTime-${time}`}
                  {...field}
                  value={time}
                  className="hidden"
                />
                <Badge
                  color={selectedTime === time ? "success" : "gray"}
                  icon={CiClock2}
                  size="sm"
                  onClick={() => handleTimeChange(time)}
                >
                  {time}
                </Badge>
              </label>
            </React.Fragment>
          ))}
        </div>
        {touched.reservationTime && errors.reservationTime && (
          <ErrorMessage
            name="reservationTime"
            component="p"
            className="text-xs text-red-600"
          />
        )}
      </div>
    </div>
  );
}

export default ReservationTimeRadio;
