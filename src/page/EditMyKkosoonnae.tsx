import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import SubmitBtn from "../components/common/SubmitBtn";
import MyKkosoonnaeImg from "../components/mykkosoonae/MyKkosoonnaeImg";
import MyKkosoonnaeInput from "../components/mykkosoonae/MyKkosoonnaeInput";

const EditMyKkosoonnae: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="내꼬순내 수정" leftBtn={true} />
      <div className="mt-5 pb-24 mx-5 font-bold">
        <MyKkosoonnaeImg img="https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=128" />
        <MyKkosoonnaeInput
          name="샤샤"
          type="샴"
          age="2006년 3월 28일"
          gender="여아"
          weight="3"
        />
        <SubmitBtn value="수정하기" />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default EditMyKkosoonnae;
