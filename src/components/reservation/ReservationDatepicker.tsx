import React, { useState } from "react";
import styled from "styled-components";
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
    <DatepickerGroup>
      <label htmlFor={name}>{label}</label>
      <DatePickerWrap>
        <CiCalendar />
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={reservationDate}
          onChange={(date: Date) => {
            setReservationDate(date);
            setFieldValue(name, date.toISOString().slice(0, 10));
          }}
        />
      </DatePickerWrap>
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs text-red-600"
      />
    </DatepickerGroup>
  );
}

const DatepickerGroup = styled.div`
  display: flex;
  align-items: center;
  label {
    width: 80px;
    color: #000;
    font-size: 1rem;
  }
`;

const DatePickerWrap = styled.div`
  position: relative;
  width: calc(100% - 80px);
  > svg {
    color: #888;
    position: absolute;
    height: 20px;
    width: 20px;
    left: 4px;
    top: 11px;
  }
  .react-datepicker-wrapper {
    width: 100%;
    .react-datepicker__input-container {
      input {
        height: 44px;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 100%;
        background: none;
        padding-left: 30px;
      }
    }
  }
`;
export default ReservationDatepicker;
