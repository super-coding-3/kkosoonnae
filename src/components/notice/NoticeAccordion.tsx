import React from "react";
import styled from "styled-components";
import { Accordion } from "flowbite-react";

function NoticeAccordion() {
  return (
    <NoticeAccordionWrap className="px-4 py-4">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            꼬순내가 4주년 이벤트에 12억 씁니다!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 ">
              다가오는 7월, 4주년을 맞이하여카카오헤어샵 이벤트에 12억 씁니다!
              3주년 이벤트의 2배로 비용을 투입하여 신규고객 예약도 2배 늘어날
              예정! 꼬순내 4주년 이벤트에 참여하고 신규고객을 만나보세요 :)
              +++6월 30일까지 입점 시 입점 비용은 꼬순내가 쏩니다!지금 무료로
              입점하고, 4주년 이벤트 참여하세요!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            꼬순내가 4주년 이벤트에 12억 씁니다!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 ">
              다가오는 7월, 4주년을 맞이하여카카오헤어샵 이벤트에 12억 씁니다!
              3주년 이벤트의 2배로 비용을 투입하여 신규고객 예약도 2배 늘어날
              예정! 꼬순내 4주년 이벤트에 참여하고 신규고객을 만나보세요 :)
              +++6월 30일까지 입점 시 입점 비용은 꼬순내가 쏩니다!지금 무료로
              입점하고, 4주년 이벤트 참여하세요!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
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
