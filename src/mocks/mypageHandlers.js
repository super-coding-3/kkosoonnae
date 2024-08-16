import { http, HttpResponse } from "msw";

export const mypageHandlers = [
  http.get("https://kkosoonnae.store/api/user/customer/nickname", () => {
    return HttpResponse.json("홍길동");
  }),

  http.get("https://kkosoonnae.store/api/user/point", () => {
    return HttpResponse.json({
      title: "잔여 포인트",
      pointRm: 0,
    });
  }),

  http.get("https://kkosoonnae.store/api/user/pet/allPet-list", () => {
    return HttpResponse.json([
      {
        petNo: 1,
        img: "https://kkosoonnae-bucket.s3.ap-northeast-2.amazonaws.com/pet/f1d88432-bfa6-4101-bccd-30dac45507bf_KakaoTalk_20240527_170340209.jpg",
        name: "몽실이",
        type: "버만",
        birthDt: "2022-10-04",
        gender: "여아",
        weight: "5",
        mainPet: "Y",
      },
      {
        petNo: 2,
        img: "https://kkosoonnae-bucket.s3.ap-northeast-2.amazonaws.com/pet/f1d88432-bfa6-4101-bccd-30dac45507bf_KakaoTalk_20240527_170340209.jpg",
        name: "샤샤",
        type: "샴",
        birthDt: "2021-05-05",
        gender: "남아",
        weight: "3",
        mainPet: "N",
      },
    ]);
  }),
];

export default mypageHandlers;
