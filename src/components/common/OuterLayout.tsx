import React from "react";

interface OuterLayoutProps {
  children: React.ReactNode;
}

const OuterLayout: React.FC<OuterLayoutProps> = ({ children }) => {
  return (
    <section className="h-full max-w-[640px] relative mx-auto bg-white border border-gray-200">
      {children}
    </section>
  );
};

export default OuterLayout;
