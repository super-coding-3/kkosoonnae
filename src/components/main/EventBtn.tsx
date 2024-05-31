import React from "react";

const EventBtnContent: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center gap-2 px-2"
      style={{ marginTop: "-50px" }}
    >
      <a
        href="https://smartstore.naver.com/pawinhand"
        target="_blank"
        className="block relative z-1 w-1/2 min-h-28 shadow-md overflow-hidden rounded-lg"
        rel="noreferrer"
      >
        <img src="img/main/event1.png" alt="" className="w-full" />
      </a>
      <a
        href="https://m.pet-friends.co.kr/category/2/5?productGroup2Id=4&filters=orderBy%5C-product_score"
        target="_blank"
        className="block relative z-1 w-1/2 min-h-28 shadow-md overflow-hidden rounded-lg"
        rel="noreferrer"
      >
        <img src="img/main/event2.png" alt="" className="w-full" />
      </a>
    </div>
  );
};

export default EventBtnContent;
