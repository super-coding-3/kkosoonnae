import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

const StyleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <div className="slider-container mt-6 mb-5 pr-4">
            <h1 className='ml-4 mb-2 text-[25px]'>최근 주변매장 스타일 이용내역</h1>
        <Slider {...settings}>
          <CardDiv>
            <img src='img/salon/cut1.png' style={{width:"400px", borderRadius:"4px"}} alt='cut-img'/>
            <span className='ml-2 text-[20px] font-bold'>포메라니안 곰돌이 컷</span>
            <h2 className='ml-2 text-[16px]'>49000원</h2>
            <button
            className="w-[300px] bg-MAIN_COLOR text-MAIN_IVORY h-10 rounded-lg text-lg mt-3 ml-2"
            >예약하기</button>
          </CardDiv>
          <CardDiv>
            <img src='img/salon/cut1.png' style={{width:"400px", borderRadius:"4px"}} alt='cut-img'/>
            <span className='ml-2 text-[20px] font-bold'>포메라니안 곰돌이 컷</span>
            <h2 className='ml-2 text-[16px]'>49000원</h2>
            <button
            className="w-[300px] bg-MAIN_COLOR text-MAIN_IVORY h-10 rounded-lg text-lg mt-3 ml-2"
            >예약하기</button>
          </CardDiv>
          <CardDiv>
            <img src='img/salon/cut1.png' style={{width:"400px", borderRadius:"4px"}} alt='cut-img'/>
            <span className='ml-2 text-[20px] font-bold'>포메라니안 곰돌이 컷</span>
            <h2 className='ml-2 text-[16px]'>49000원</h2>
            <button
            className="w-[300px] bg-MAIN_COLOR text-MAIN_IVORY h-10 rounded-lg text-lg mt-3 ml-2"
            >예약하기</button>
          </CardDiv>
        </Slider>
      </div>
    );
};

export default StyleSlider;

const CardDiv = styled.div`
    width: 50%;
    height: 440px;
    display: flex;
    flex-direction: column;
    border: 1px solid ;
    border-radius: 8px ;
`

