import React from 'react';
import DaumPostcode from 'react-daum-postcode';

interface PostcodeProps {
  onAddressSelect: (addressData: { postCode: string; address: string; addressDetail: string }) => void;
}

const Postcode: React.FC<PostcodeProps> = ({ onAddressSelect }) => {
  const handleComplete = (data:any) => {
    // let fullAddress = data.address;
    // let extraAddress = '';

    // if (data.addressType === 'R') {/*R은 도로명 주소 를 뜻합니다!  */} {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress += (extraAddress !== '' ? ` ${data.buildingName}` : data.buildingName);
    //   }
    //   fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    // }

    const addressData = {
      postCode:data.zonecode,
      address:data.address,
      addressDetail:'',
    }

    onAddressSelect(addressData);
  };

  return <DaumPostcode onComplete={handleComplete} className='block absolute top-24 w-full h-96 p-2 z-50'  theme={themeObj}/>;
};

var themeObj = {
    bgColor: "#162525", //바탕 배경색
    searchBgColor: "#162525", //검색창 배경색
    contentBgColor: "#162525", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "#162525", //페이지 배경색
    textColor: "#FFFFFF", //기본 글자색
    queryTextColor: "#FFFFFF", //검색창 글자색
    //postcodeTextColor: "", //우편번호 글자색
    //emphTextColor: "", //강조 글자색
    outlineColor: "#444444" //테두리
 };

export default Postcode;