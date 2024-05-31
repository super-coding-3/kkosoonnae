import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import PageTitle from "../components/common/PageTitle";
import LoginPage from "../components/login/LoginPage";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <OuterLayout>
        <PageTitle title="로그인" />
        <div className="flex flex-col items-center w-full max-w-[640px] min-w-[375px] mx-auto p-4 flex-grow">
          <LoginPage />
        </div>
        <div className="w-full max-w-[640px] mx-auto">
          <Footer />
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md p-4 max-w-[640px] mx-auto w-full">
          <Nav />
        </div>
      </OuterLayout>
    </div>
  );
};

export default Login;
