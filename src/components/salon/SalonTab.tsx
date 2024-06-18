import React from "react";
import styled from "styled-components";
import { Tabs } from "flowbite-react";

import SalonInfo from "./SalonInfo";
import SalonStyle from "./SalonStyle";
import SalonReview from "./SalonReview";

function SalonTab() {
  return (
    <div className="pb-4">
      <Tabs className="salon-tabs" style="underline">
        <Tabs.Item active title="매장정보" style={{ width: "50%" }}>
          <SalonInfo />
          <SalonStyle />
        </Tabs.Item>
        <Tabs.Item title="리뷰">
          <SalonReview />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default SalonTab;
