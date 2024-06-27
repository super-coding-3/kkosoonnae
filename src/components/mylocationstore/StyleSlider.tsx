import React from "react";
import Slider from "react-slick";

import { Store } from "../../page/MyLocationStore";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../constants/constants";

interface StoreListProps {
  stores: Store[];
}

interface Style {
  styleId: number;
  styleName: string;
  img: string;
  price: number;
  storeName: string;
  storeNo: string;
}

const StyleSlider: React.FC<StoreListProps> = ({ stores }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const styles: Style[] = shuffleArray(
    stores.flatMap((store) =>
      store.style.map((style) => ({
        ...style,
        storeName: store.storeName,
        storeNo: store.storeNo,
      }))
    )
  ).slice(0, 6);

  return (
    <>
      <h1 className="text-xl mb-4 mt-4 font-semibold">
        최근 주변 매장 스타일 이용 내역
      </h1>
      <Slider {...settings} className="mb-5 w-full px-0">
        {styles.map((style: Style) => (
          <div key={style.styleId} className="w-full px-1 flex flex-col">
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
              <img
                src={style.img}
                alt={style.styleName}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-[17px] font-bold text-gray-700">
                  {style.storeName}
                </p>
                <p className="font-xl text-gray-700">{style.styleName}</p>
                <p className="text-l font-bold text-gray-900">
                  {style.price}원
                </p>
                <button
                  onClick={() => {
                    navigate(`${ROUTER_PATH.salon}${style.storeNo}`);
                  }}
                  className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-10 mt-4 rounded-lg text-lg"
                >
                  매장방문
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default StyleSlider;
