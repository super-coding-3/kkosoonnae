import React from "react";
import styled from "styled-components";
import { ErrorMessage, useFormikContext } from "formik";
import { Datepicker } from "flowbite-react";

interface FormValues {
  reservationDate: Date | null;
  [key: string]: any;
}

interface ReservationDatepickerProps {
  label: string;
  name: string;
}

function ReservationDatepicker({ label, name }: ReservationDatepickerProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <DatepickerGroup>
      <label htmlFor="reservationDate">{label}</label>
      <div>
        <Datepicker
          id="reservationDate"
          onChange={handleDateChange}
          language="ko-KR"
          labelTodayButton="오늘"
          labelClearButton="닫기"
        />
        <ErrorMessage name="reservationDate" component="p" />
      </div>
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
  > div {
    width: calc(100% - 80px);
    input {
      background: none;
    }
  }
  p {
    font-size: 11px;
    color: red;
  }
`;

export default ReservationDatepicker;
