import HttpClient from "../../utils/api/customAxios";

const CheckAvailabilityApi = async (
  field: "id" | "nickName",
  value: string
) => {
  let url = "";

  if (field === "id") {
    url = `/KkoSoonNae/customer/checkLoginId/${value}`;
  } else if (field === "nickName") {
    url = `/KkoSoonNae/customer/checkNickName/${value}`;
  }
  try {
    const response = await HttpClient.get(url);
    const message = response.data.message;
    alert(message);
  } catch (error) {
    alert("전송 오류!");
  }
};
export default CheckAvailabilityApi;
