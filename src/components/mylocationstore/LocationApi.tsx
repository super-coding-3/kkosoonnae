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
    storeImg: string[];
    style: {
      styleId: number;
      styleName: string;
      img: string;
      price: number;
    }[];
  }

  export const fetchStores = async (lat: number, lon: number): Promise<Store[]> => {
    try {
      const response = await HttpClient.get("/KkoSoonNae/store/nearby", {
        params: { lat, lon },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching store data:", error);
      throw error;
    }
  };

  const initialLat = 37.5571;
  const initialLon = 126.9243;
  fetchStores(initialLat, initialLon);