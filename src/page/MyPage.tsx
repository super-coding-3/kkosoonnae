import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { PiPawPrintFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OuterLayout from "../components/common/OuterLayout";
import Nav from "../components/common/Nav";
import PageTitle from "../components/common/PageTitle";
import MyPageMainBtn from "../components/mypage/MyPageMainBtn";
import MyPagePetInfo from "../components/mypage/MyPagePetInfo";
import MyPagePetAdd from "../components/mypage/MyPagePetAdd";
import BtnLogout from "../components/common/BtnLogut";

interface MyPageInfosType {
  userNickname: string;
  pointRm: string;
  myPet: Array<MyPetInfosType>;
}

interface MyPetInfosType {
  petNo: number;
  img: string;
  name: string;
  type: string;
  birthDt: string;
  gender: string;
  weight: string;
}

const MyPage: React.FC = () => {
  const [mypageInfos, setMypageInfos] = useState<MyPageInfosType>({
    userNickname: "",
    pointRm: "",
    myPet: [],
  });

  const getPoints = async () => {
    const res = await HttpClient.get("/KkoSoonNae/point");
    return res.data;
  };

  const getUserNickname = async () => {
    const res = await HttpClient.get("/KkoSoonNae/customer/nickname");
    return res.data;
  };

  const getMyPet = async () => {
    const res = await HttpClient.get("/KkoSoonNae/pet/allPet-list");
    return res.data;
  };

  useEffect(() => {
    axios.all([getPoints(), getUserNickname(), getMyPet()]).then(
      axios.spread((pointRes, nicknameRes, mypetRes) => {
        setMypageInfos((mypageInfos) => ({
          ...mypageInfos,
          userNickname: nicknameRes,
          pointRm: pointRes.pointRm,
          myPet: mypetRes.map((item: MyPetInfosType) => ({
            petNo: item.petNo,
            img: item.img,
            name: item.name,
            type: item.type,
            birthDt: item.birthDt,
            gender: item.gender,
            weight: item.weight,
          })),
        }));
      })
    );

    console.log(mypageInfos.myPet);
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <OuterLayout>
      <PageTitle title="마이페이지" leftBtn={false} />
      <div className="mt-5 pb-24 mx-4">
        <div className="flex justify-between items-center">
          <div className="font-black text-2xl">
            {JSON.stringify(mypageInfos) === "{}" ? (
              <div>익명의 집사님</div>
            ) : (
              <div>{mypageInfos.userNickname} 집사님</div>
            )}
          </div>
          <div className="flex gap-2">
            <BtnLogout/>
          <Link
            to="/editprofile"
            className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
          >
            프로필 수정
          </Link>
          </div>
        </div>
        <button className="flex justify-between items-center bg-MAIN_COLOR rounded-xl px-5 py-3 mt-5 w-full">
          <div className="flex justify-between items-center text-MAIN_GRAY gap-1">
            <div>내 포인트</div>
            <BiDollarCircle size="20px" />
          </div>
          <div>
            <div className="flex justify-between items-center text-MAIN_GRAY gap-2">
              {JSON.stringify(mypageInfos) === "{}" ? (
                <div>포인트 없음</div>
              ) : (
                <div>{mypageInfos.pointRm}원</div>
              )}
              <SlArrowRight />
            </div>
          </div>
        </button>
        <div>
          <div className="flex justify-start items-center gap-1 mt-7">
            <div className="font-semibold text-2xl">내 꼬순내</div>
            <PiPawPrintFill color="#492D28" size="25px" />
          </div>
        </div>
        <div className="mt-3">
          {!(mypageInfos.myPet?.length === 0) ? (
            <Slider {...settings}>
              {mypageInfos.myPet.map((item: MyPetInfosType) => (
                <div className="pr-6">
                  <MyPagePetInfo
                    petNo={item.petNo}
                    img={item.img}
                    name={item.name}
                    type={item.type}
                    age={item.birthDt}
                    gender={item.gender}
                    weigth={item.weight}
                  />
                </div>
              ))}
              <div className="pr-6">
                <MyPagePetAdd userName="홍길동" />
              </div>
            </Slider>
          ) : (
            <MyPagePetAdd userName="홍길동" />
          )}
        </div>
        <div className="flex flex-col justify-center items-start mt-7 gap-5">
          <div className="flex justify-center items-center gap-5 w-full">
            <MyPageMainBtn title="예약내역" link="/myreservation" />
            <MyPageMainBtn title="내가 쓴 리뷰" link="/myreview" />
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <MyPageMainBtn title="관심매장" link="/mylikestore" />
            <MyPageMainBtn title="문의하기" link="/registerqna" />
          </div>
        </div>
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyPage;
