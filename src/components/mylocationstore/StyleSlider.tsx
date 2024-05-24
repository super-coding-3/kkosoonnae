import React from "react";
import Slider from "react-slick";
import { Store } from "./LocationApi";
interface StoreListProps {
  stores: Store[];
}

const StyleSlider:React.FC<StoreListProps> = ({stores}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1 className="mt-6 mb-4 text-[20px] ml-2">최근 주변매장 스타일 이용내역</h1>
      <Slider {...settings} className="mb-5 ml-2 mr-2">
      {stores.flatMap((store) =>
          store.style.map((style) => (
            <div key={style.styleId} className="w-1/2 flex flex-col">
              <div className="w-full h-60 overflow-hidden flex justify-center items-center">
                <img
                  src={style.img}
                  alt={style.styleName}
                  className="w-full ml-2 h-auto object-cover"
                />
              </div>
              <h1 className="ml-2 text-[20px] mb-1 font-bold">{store.storeName}</h1>
              <span className="ml-2 text-[18px]">{style.styleName}</span>
              <h2 className="ml-2 text-[16px] mb-2">{style.price}원</h2>
              <button className="w-[300px] bg-MAIN_COLOR text-MAIN_IVORY h-10 mb-8 rounded-lg text-lg ml-2">
                매장방문
              </button>
            </div>
          ))
        )}
      </Slider>
    </>
  );
};

export default StyleSlider;
