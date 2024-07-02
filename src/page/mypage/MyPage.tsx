import useAxios from "../../hooks/useAxios";

import React, { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { PiPawPrintFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { parseISO } from "date-fns";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OuterLayout from "../../components/common/OuterLayout";
import Nav from "../../components/common/Nav";
import PageTitle from "../../components/common/PageTitle";
import MyPageMainBtn from "../../components/mypage/MyPageMainBtn";
import MyPagePetInfo from "../../components/mypage/MyPagePetInfo";
import MyPagePetAdd from "../../components/mypage/MyPagePetAdd";
import BtnLogout from "../../components/common/BtnLogut";
import useToastMessage from "../../hooks/useToastMessage";
import { ROUTER_PATH } from "../../constants/constants";
import ErrorPage from "../../components/common/ErrorPage";

interface UserInfosType {
  userNickname: string;
  pointRm: string;
}
interface PetInfosType {
  petNo: number;
  img: string;
  name: string;
  type: string;
  birthDt: string;
  gender: string;
  weight: string;
  mainPet: string;
}

const MyPage: React.FC = () => {
  const [userInfos, setUserInfos] = useState<UserInfosType>({
    userNickname: "",
    pointRm: "",
  });
  const [petInfos, setPetInfos] = useState<PetInfosType[]>();
  const [representative, setRepresentative] = useState<boolean>(false);

  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const activeMainPetEdit = () => {
    setRepresentative(!representative);
  };

  const handleMainPetEdit = async (petNo: number, petName: string) => {
    handleRequest({
      url: `/api/user/pet/main-pet/${petNo}`,
      method: "PUT",
    });
    if (!error) {
      showToast({
        message: `대표 꼬순내가 ${petName}(으)로 변경되었습니다`,
        action: () => {
          window.location.reload();
        },
      });
    } else {
      showToast({ message: "오류가 발생했습니다" });
    }
  };

  const getPetAge = (birthDt: string) => {
    const today = new Date();
    const dateBirthDt = parseISO(birthDt);
    let age = today.getFullYear() - dateBirthDt.getFullYear();
    const month = today.getMonth() - dateBirthDt.getMonth();
    const day = today.getDate() - dateBirthDt.getDate();
    if (month <= 0 && age === 0) return `${day}일`;
    if (age === 0) return `${month}개월`;
    if (month < 0 || (month === 0 && today.getDate() < dateBirthDt.getDate())) {
      age--;
    }
    return `${age}살`;
  };

  const handleGetMypageData = () => {
    handleRequest({
      url: "/api/user/customer/nickname",
      method: "GET",
      setData: (data) =>
        setUserInfos((prevState) => ({
          ...prevState,
          userNickname: data,
        })),
    });

    handleRequest({
      url: "/api/user/point",
      method: "GET",
      setData: (data) =>
        setUserInfos((prevState) => ({
          ...prevState,
          pointRm: data.pointRm,
        })),
    });

    handleRequest({
      url: "/api/user/pet/allPet-list",
      method: "GET",
      setData: setPetInfos,
    });
  };

  useEffect(() => {
    handleGetMypageData();
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
      {Loading}
      {error ? (
        <ErrorPage errorMessage={error} />
      ) : (
        <div className="pt-4 pb-24 px-4">
          <header className="flex justify-between items-center">
            <div className="font-black text-2xl username-size-change">
              {JSON.stringify(userInfos.userNickname) === "{}" ? (
                <p>익명의 집사님</p>
              ) : (
                <div className="flex items-center leading w-72 username-width-change">
                  <h1 className="truncate">{userInfos.userNickname}</h1>
                  <h1 className="w-7">님</h1>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <BtnLogout />
              <Link
                to={ROUTER_PATH.editProfile}
                className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
              >
                프로필 수정
              </Link>
            </div>
          </header>
          <button className="flex justify-between items-center bg-MAIN_COLOR rounded-xl px-5 py-3 mt-5 w-full">
            <section className="flex justify-between items-center text-MAIN_GRAY gap-1">
              <p>내 포인트</p>
              <BiDollarCircle size="20px" />
            </section>
            <section>
              <span className="flex justify-between items-center text-MAIN_GRAY gap-2">
                {JSON.stringify(userInfos.pointRm) === "" ? (
                  <p>포인트 없음</p>
                ) : (
                  <p>{userInfos.pointRm}원</p>
                )}
                <SlArrowRight />
              </span>
            </section>
          </button>
          <section>
            <div className="flex justify-between items-center gap-1 mt-7">
              <div className="flex items-center">
                <h1 className="font-semibold text-2xl">내 꼬순내</h1>
                <PiPawPrintFill color="#492D28" size="25px" />
              </div>
              <div>
                {petInfos != undefined && petInfos.length > 1 && (
                  <div>
                    <button
                      className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
                      onClick={activeMainPetEdit}
                    >
                      {representative === false
                        ? "대표 꼬순내 수정하기"
                        : "대표 꼬순내 수정 취소"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
          <ul className="mt-3">
            {!(petInfos?.length === 0) ? (
              <Slider {...settings}>
                {petInfos?.map((item: PetInfosType) => (
                  <div className="pr-2" key={item.petNo}>
                    <MyPagePetInfo
                      petNo={item.petNo}
                      img={item.img}
                      name={item.name}
                      type={item.type}
                      age={getPetAge(item.birthDt)}
                      gender={item.gender}
                      weigth={item.weight}
                      mainPet={item.mainPet}
                      representative={representative}
                      onClick={() => {
                        handleMainPetEdit(item.petNo, item.name);
                      }}
                    />
                  </div>
                ))}
                <div className="pr-6">
                  <MyPagePetAdd userName={userInfos.userNickname} />
                </div>
              </Slider>
            ) : (
              <MyPagePetAdd userName={userInfos.userNickname} />
            )}
          </ul>
          <section className="flex flex-col justify-center items-start mt-7 gap-3">
            <div className="flex justify-center items-center gap-3 w-full">
              <MyPageMainBtn
                title="예약내역"
                link={ROUTER_PATH.myReservation}
              />
              <MyPageMainBtn title="내가 쓴 리뷰" link={ROUTER_PATH.myReview} />
            </div>
            <div className="flex justify-center items-center gap-3 w-full">
              <MyPageMainBtn title="관심매장" link={ROUTER_PATH.myLikeStore} />
              <MyPageMainBtn title="문의하기" link={ROUTER_PATH.registerQnA} />
            </div>
          </section>
          <Toast />
        </div>
      )}
      <Nav />
    </OuterLayout>
  );
};

export default MyPage;
