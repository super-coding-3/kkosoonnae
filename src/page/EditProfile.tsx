import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import EditProfileLabel from "../components/editprofile/EditProfileLabel";
import EditProfileBtn from "../components/editprofile/EditProfileBtn";
import SubmitBtn from "../components/common/SubmitBtn";

const EditProfile: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="프로필 수정" />
      <div className="flex justify-center items-center mt-5 mb-24 mx-5 font-bold">
        <form className="flex flex-col gap-3 w-full ">
          <div className="flex justify-center items-center">
            <EditProfileLabel label="닉네임" />
            <input
              type="text"
              className="h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
              placeholder="이*경"
              required
            />
            <EditProfileBtn value="중복체크" />
          </div>
          <div className="flex justify-center items-center">
            <EditProfileLabel label="전화번호" />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              className=" h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:outline-none focus:border-MAIN_COLOR focus:ring-transparent rounded-lg"
              placeholder="000-****-0000"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <EditProfileLabel label="주소" />
            <input
              type="text"
              className="text-gray-500 h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent cursor-not-allowed rounded-lg"
              value="000-000"
              disabled
            />
            <EditProfileBtn value="우편번호 찾기" />
          </div>
          <input
            type="text"
            className="text-gray-500 h-10 p-2.5 ml-20 border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent cursor-not-allowed rounded-lg"
            value="00시 00구 00동"
            disabled
          />
          <input
            type="text"
            className="h-10 p-2.5 ml-20 border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
            placeholder="00빌라 111동 222호"
            required
          />
          <SubmitBtn value="수정하기" />
        </form>
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default EditProfile;
