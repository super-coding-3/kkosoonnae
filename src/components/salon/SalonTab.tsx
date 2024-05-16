import React from "react";
import styled from "styled-components";
import { Tabs } from "flowbite-react";

import SalonInfo from "./SalonInfo";
import SalonStyle from "./SalonStyle";
import SalonReview from "./SalonReview";

function SalonTab() {
  return (
    <SalonTabWrap className="pb-4">
      <Tabs aria-label="Tabs with underline" style="underline">
        <Tabs.Item active title="매장정보">
          <SalonInfo />
          <SalonStyle />
        </Tabs.Item>
        <Tabs.Item title="리뷰">
          <SalonReview />
        </Tabs.Item>
      </Tabs>
    </SalonTabWrap>
  );
}

const SalonTabWrap = styled.div`
  div {
    button[role="tab"] {
      width: 50%;
      color: #dddddd;
      font-size: 14px;
      &[aria-selected="true"] {
        font-weight: bold;
        color: #816f6b;
        border-color: #816f6b;
      }
      &:focus {
        --tw-ring-opacity: 0;
        --tw-ring-color: none;
      }
    }
  }
`;

export default SalonTab;
