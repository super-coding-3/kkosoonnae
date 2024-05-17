import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

interface ReservationFormGroupProps {
  label: string;
  name: string;
  value?: string;
  type?: string;
  readOnly?: boolean;
}

function ReservationFormGroup({
  label,
  name,
  value,
  type = "text",
  readOnly = false,
}: ReservationFormGroupProps) {
  return (
    <FormGroup>
      <label htmlFor={name}>{label}</label>
      <div>
        <Field
          type={type}
          id={name}
          name={name}
          value={value}
          readOnly={readOnly}
        />
        <ErrorMessage name={name} component="p" />
      </div>
    </FormGroup>
  );
}

const FormGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 80px;
    color: #000;
    font-size: 1rem;
  }
  div {
    width: calc(100% - 80px);
    input {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
      &[readonly] {
        background: #f7f7f7;
      }
    }
  }

  p {
    font-size: 11px;
    color: red;
  }
`;
export default ReservationFormGroup;
