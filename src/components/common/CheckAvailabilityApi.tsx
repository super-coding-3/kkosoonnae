import HttpClient from "../../utils/api/customAxios";

import React from "react";

const CheckAvailabilityApi = async (
  field: "loginId" | "nickName",
  value: string,
  showToast: (params: { message: string; action?: () => void }) => void,
  setDoubleCheck: React.Dispatch<React.SetStateAction<string>>
) => {
  let url = "";

  if (field === "loginId") {
    url = `/api/user/customer/check/login/${value}`;
  } else if (field === "nickName") {
    url = `/api/user/customer/check/nickname/${value}`;
  }
  try {
    const response = await HttpClient.get(url);
    const message = response.data.message;
    if (message?.includes("사용 가능한 닉네임 입니다")) {
      setDoubleCheck("complete");
    }
    if (message?.includes("중복된 닉네임")) {
      setDoubleCheck("duplicated");
    }
    showToast({ message: message });
  } catch (error) {
    // console.log(error);
    showToast({ message: "오류가 발생했습니다" });
  }
};
export default CheckAvailabilityApi;
