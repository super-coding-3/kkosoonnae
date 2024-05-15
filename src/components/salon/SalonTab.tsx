import React from "react";

import { Tabs } from "flowbite-react";
import SalonInfo from "./SalonInfo";

function SalonTab() {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="매장정보">
        매장정보
        <SalonInfo />
      </Tabs.Item>
      <Tabs.Item title="리뷰">리뷰리스트</Tabs.Item>
    </Tabs>
  );
}

export default SalonTab;
