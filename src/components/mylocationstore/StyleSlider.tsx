import React from "react";
import Slider from "react-slick";
import { Store } from "./LocationApi";
import { useNavigate } from "react-router-dom";


interface StoreListProps {
  stores: Store[];
}

interface Style {
  styleId: number;
  styleName: string;
  img: string;
  price: number;
  storeName: string;
  storeNo:string;
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
        storeNo:store.storeNo
      }))
    )
  ).slice(0, 6);

  return (
    <>
      <h1 className="text-xl mb-4 mt-4 ml-2 font-semibold">최근 주변매장 스타일 이용내역</h1>
      <Slider {...settings} className="mb-5 mr-2">
        {styles.map((style: Style) => (
          <div key={style.styleId} className="w-1/2 px-2 flex flex-col">
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden"> {/* border 클래스 추가 */}
              <img
                src={style.img}
                alt={style.styleName}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className=" text-[17px] font-bold text-gray-700 dark:text-gray-400 flex items-center gap-1">
                  {style.storeName}
                </p>
                <p className="font-xl text-gray-700 dark:text-gray-400 flex items-center gap-1">
                  {style.styleName} 
                </p>
                <p className="text-l font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
                  {style.price}원 
                </p>
                <button onClick={()=>{navigate(`/salon/${style.storeNo}`)}} className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-10 mt-4 rounded-lg text-lg">
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
