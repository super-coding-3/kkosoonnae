import HttpClient from "../../utils/api/customAxios";

export interface Store {
  storeNo: number;
  storeName: string;
  content: string;
  phone: string;
  roadAddress: string;
  lat: number;
  lon: number;
  openingTime: string;
  closingTime: string;
  petImg: string[];
  style: {
    styleId: number;
    styleName: string;
    img: string;
    price: number;
  }[];
  averageReviewScore: number;
  latestReviewMessage: string;
}

export const fetchStores = async (
  lat: number,
  lon: number
): Promise<Store[]> => {
  try {
    const response = await HttpClient.get("/KkoSoonNae/store/nearby", {
      params: { lat, lon },
    });
    return response.data;
  } catch (error) {
    console.error("서버와의 통신에 오류가 있습니다.", error);
    throw error;
  }
};

const initialLat = 37.5022;
const initialLon = 127.0321;
fetchStores(initialLat, initialLon);
