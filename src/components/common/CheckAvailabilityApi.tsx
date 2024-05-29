import HttpClient from "../../utils/api/customAxios";

const CheckAvailabilityApi = async (
  field: "loginId" | "nickName",
  value: string
) => {
  let url = "";

  if (field === "loginId") {
    url = `/KkoSoonNae/customer/check/login/${value}`;
  } else if (field === "nickName") {
    url = `/KkoSoonNae/customer/check/nickname/${value}`;
  }
  try {
    const response = await HttpClient.get(url);
    const message = response.data.message;
    alert(message);
  } catch (error) {
    alert("전송 오류!");
    console.log(error)
  }
};
export default CheckAvailabilityApi;
