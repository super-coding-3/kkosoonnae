import React from "react";
import styled from "styled-components";

import { Field, ErrorMessage } from "formik";

interface ReservationTextAreaProps {
  label: string;
  name: string;
}
function ReservationTextArea({ label, name }: ReservationTextAreaProps) {
  return (
    <TextAreaGroup>
      <label htmlFor={name}>{label}</label>
      <div>
        <Field as="textarea" id={name} name={name} />
        <ErrorMessage name={name} component="p" />
      </div>
    </TextAreaGroup>
  );
}

const TextAreaGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 80px;
    color: #000;
    font-size: 1rem;
  }
  div {
    width: calc(100% - 80px);
    textarea {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    p {
      font-size: 11px;
      color: red;
    }
  }
`;
export default ReservationTextArea;
