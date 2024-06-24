import { useState, useEffect } from "react";
import { Accordion } from "flowbite-react";
import useAxios from "../../hooks/useAxios";

interface NoticeItem {
  noticeNo: number;
  noticeTitle: string;
  noticeContent: string;

  noticeDate: string;
  noticeViewCount: string;
  noticeImg: string;
}

function NoticeAccordion() {
  const [noticeData, setNoticeData] = useState<NoticeItem[]>([]);

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  useEffect(() => {
    handleRequest({
      url: "/api/user/notice/all",
      method: "GET",
      setData: setNoticeData,
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="my-8 px-4">
        <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 notice-accordion">
      <Accordion
        collapseAll
        className="border-0 border-b-[1px] border-gray-200 rounded-none"
      >
        {noticeData.map((item, index) => (
          <Accordion.Panel key={index} className=" rounded-none">
            <Accordion.Title className="p-4 border-b-[1px] border-gray-200 rounded-none">
              {item.noticeTitle}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-1 text-gray-500 ">{item.noticeContent}</p>
              <p className="mb-2  text-gray-600  text-right">
                {new Date(item.noticeDate).toLocaleDateString()}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default NoticeAccordion;
