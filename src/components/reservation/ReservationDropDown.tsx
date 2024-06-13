import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Field, ErrorMessage, useFormikContext } from "formik";
import HttpClient from "../../utils/api/customAxios";

interface CutStyleItem {
  cutStyle: string;
}

function ReservationDropDown() {
  const [cutStyleState, setCutStyleState] = useState<CutStyleItem[]>([]);

  const { storeNo } = useParams<{ storeNo: string }>();

  const { setFieldValue } = useFormikContext();

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStyle = event.target.value;
    setFieldValue("cutStyle", selectedStyle);
  };

  const getCutstyle = async () => {
    const { data } = await HttpClient.get<CutStyleItem[]>(
      `/api/user/reservation/style-list/${storeNo}`
    );
    setCutStyleState(data);
    return data;
  };

  useEffect(() => {
    getCutstyle();
  }, [storeNo]);

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
          {cutStyleState.map((item, index) => (
            <option key={index} value={item.cutStyle}>
              {item.cutStyle}
            </option>
          ))}
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
