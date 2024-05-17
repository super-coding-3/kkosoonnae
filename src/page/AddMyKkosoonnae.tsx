import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import SubmitBtn from "../components/common/SubmitBtn";
import MyKkosoonnaeImg from "../components/mykkosoonae/MyKkosoonnaeImg";
import MyKkosoonnaeInput from "../components/mykkosoonae/MyKkosoonnaeInput";

const AddMyKkosoonnae: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="내꼬순내 등록" leftBtn={true} />
      <div className="mt-5 pb-24 mx-5 font-bold">
        <MyKkosoonnaeImg img="/img/common/icon-dog-sitdown.svg" />
        <MyKkosoonnaeInput />
        <SubmitBtn value="등록하기" />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default AddMyKkosoonnae;
