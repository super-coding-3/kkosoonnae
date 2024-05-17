import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

function ReservationDropDown() {
  return (
    <DropDowngroup>
      <label htmlFor="style">스타일</label>
      <div>
        <Field as="select" id="style" name="style">
          <option value="">선택해주세요</option>
          <option value="스타일1">스타일1</option>
          <option value="스타일2">스타일2</option>
          <option value="스타일3">스타일3</option>
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
