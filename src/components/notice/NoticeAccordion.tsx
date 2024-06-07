import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    const response = await HttpClient.get<NoticeItem[]>("/api/notice/all");
    setData(response.data);
  };

  useEffect(() => {
    getNoticeData();
  }, []);

  return (
    <NoticeAccordionWrap className="px-4 py-4">
      <Accordion collapseAll>
        {data.map((item, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title> {item.noticeTitle}</Accordion.Title>
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
    </NoticeAccordionWrap>
  );
}

const NoticeAccordionWrap = styled.div`
  > div {
    border: none;
    border-bottom: 1px solid #e8eaed;
    border-radius: 0;
    button {
      padding: 1rem;

      &:hover {
        --tw-bg-opacity: 0;
        background-color: none;
      }
      &:focus {
        --tw-ring-opacity: 0;
        --tw-ring-color: none;
      }
      &.hover\:bg-gray-100:hover {
        --tw-bg-opacity: 0;
        background-color: none;
      }
    }
  }
`;
export default NoticeAccordion;
