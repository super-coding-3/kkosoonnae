import HttpClient from "../../utils/api/customAxios";

const CheckAvailabilityApi = async (
  field: "Id" | "NickName",
  value: string
) => {
  let url = "";

  if (field === "Id") {
    url = `/KkoSoonNae/customer/${value}`;
  } else if (field === "NickName") {
    url = `/KkoSoonNae/customer/${value}`;
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
