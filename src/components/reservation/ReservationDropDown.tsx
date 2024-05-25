import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage, useFormikContext } from "formik";

function ReservationDropDown() {
  const { setFieldValue } = useFormikContext();

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStyle = event.target.value;
    setFieldValue("cutStyle", selectedStyle);
  };

  return (
    <DropDowngroup>
      <label htmlFor="cutStyle">스타일</label>
      <div>
        <Field
          as="select"
          id="cutStyle"
          name="cutStyle"
          onChange={handleStyleChange}
        >
          <option value="">선택해주세요</option>
          <option value="곰돌이컷">곰돌이컷</option>
          <option value="양컷">양컷</option>
          <option value="진도컷">진도컷</option>
        </Field>
        <ErrorMessage name="style" component="p" />
      </div>
    </DropDowngroup>
  );
}

const DropDowngroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 80px;
    color: #000;
    font-size: 1rem;
  }
  div {
    width: calc(100% - 80px);
    select {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }

  p {
    font-size: 11px;
    color: red;
  }
`;
export default ReservationDropDown;
