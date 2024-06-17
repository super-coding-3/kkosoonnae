import { useState, useEffect } from "react";
import { Accordion } from "flowbite-react";
import HttpClient from "../../utils/api/customAxios";

interface NoticeItem {
  noticeNo: number;
  noticeTitle: string;
  noticeContent: string;

  noticeDate: string;
  noticeViewCount: string;
  noticeImg: string;
}

function NoticeAccordion() {
  const [data, setData] = useState<NoticeItem[]>([]);

  const getNoticeData = async () => {
    const response = await HttpClient.get<NoticeItem[]>("/api/user/notice/all");
    setData(response.data);
  };

  useEffect(() => {
    getNoticeData();
  }, []);

  return (
    <div className="px-4 py-4 notice-accordion">
      <Accordion
        collapseAll
        className="border-0 border-b-2 border-gray-100 rounded-none"
      >
        {data.map((item, index) => (
          <Accordion.Panel key={index} className=" rounded-none">
            <Accordion.Title className="p-4 border-b-2 border-gray-100 rounded-none">
              {item.noticeTitle}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-1 text-gray-500 dark:text-gray-400">
                {item.noticeContent}
              </p>
              <p className="mb-2  text-gray-600 dark:text-gray-500 text-right">
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
