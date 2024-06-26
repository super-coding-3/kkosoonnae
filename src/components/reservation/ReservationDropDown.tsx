import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Field, ErrorMessage, useFormikContext } from "formik";

import useAxios from "../../hooks/useAxios";

interface CutStyleItem {
  cutStyle: string;
}

function ReservationDropDown() {
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const [cutStyleState, setCutStyleState] = useState<CutStyleItem[]>([]);

  const { storeNo } = useParams<{ storeNo: string }>();

  const { setFieldValue } = useFormikContext();

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStyle = event.target.value;
    setFieldValue("cutStyle", selectedStyle);
  };

  const getCutstyle = async () => {
    try {
      await handleRequest({
        url: `/api/user/reservation/style-list/${storeNo}`,
        method: "GET",
        setData: setCutStyleState,
      });
      return cutStyleState;
    } catch (err) {
      if (error) {
        return (
          <div className="my-8 px-4">
            <p>매장 컷 스타일을 가져오지 못했습니다.</p>
          </div>
        );
      }
      return [];
    }
  };

  useEffect(() => {
    getCutstyle();
  }, [storeNo]);

  return (
    <div className="flex items-center">
      {isLoading && Loading}
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
