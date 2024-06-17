import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div className="flex items-center">
      <label htmlFor="cutStyle" className="w-[80px] text-black text-sm">
        스타일
      </label>
      <div style={{ width: "calc(100% - 80px)" }}>
        <Field
          as="select"
          id="cutStyle"
          name="cutStyle"
          onChange={handleStyleChange}
          className="w-full border-1 border-gray-300 rounded"
        >
          <option value="">선택해주세요</option>
          {cutStyleState.map((item, index) => (
            <option key={index} value={item.cutStyle}>
              {item.cutStyle}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="style"
          component="p"
          className="text-xs text-red-600"
        />
      </div>
    </div>
  );
}

export default ReservationDropDown;
