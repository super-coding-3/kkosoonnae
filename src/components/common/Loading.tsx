import { Spinner } from "flowbite-react";

const Loading: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-50 flex justify-center items-center w-full h-svh fixed top-0 left-0 right-0 bottom-0 z-20">
      <Spinner color="warning" aria-label="꼬순내 로딩중.." size="xl" />
    </div>
  );
};

export default Loading;
