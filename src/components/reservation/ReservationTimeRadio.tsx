import React from "react";
import styled from "styled-components";
import { Badge } from "flowbite-react";
import { CiClock2 } from "react-icons/ci";
import { useField, ErrorMessage, useFormikContext } from "formik";

function ReservationTimeRadio() {
  const [field] = useField("reservationTime");
  const { touched, errors } = useFormikContext<{ reservationTime: string }>();

  const selectedTime = field.value;

  const timeOptions = ["10:00", "12:00", "14:00", "16:00", "18:00"];

  return (
    <TimeRadioGroup>
      <label>예약시간</label>
      <div>
        <div className="flex gap-2 overflow-x-scroll py-1">
          {timeOptions.map((time) => (
            <React.Fragment key={time}>
              <label htmlFor={`reservationTime-${time}`}>
                <input
                  type="radio"
                  id={`reservationTime-${time}`}
                  {...field}
                  value={time}
                />
                <Badge
                  color={selectedTime === time ? "success" : "gray"}
                  icon={CiClock2}
                  size="sm"
                >
                  {time}
                </Badge>
              </label>
            </React.Fragment>
          ))}
        </div>
        {touched.reservationTime && errors.reservationTime && (
          <ErrorMessage name="reservationTime" component="p" />
        )}
      </div>
    </TimeRadioGroup>
  );
}

const TimeRadioGroup = styled.div`
  display: flex;
  align-items: center;
  input[type="radio"] {
    display: none;
  }
  label {
    width: 80px;
    color: #000;
    font-size: 1rem;
  }
  > div {
    width: calc(100% - 80px);
  }
  p {
    font-size: 11px;
    color: red;
  }
`;

export default ReservationTimeRadio;
