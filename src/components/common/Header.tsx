import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import SearchModal from "../search/SearchModal";
import { ROUTER_PATH } from "../../constants/constants";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="max-w-[640px] h-14 mx-auto my-0 bg-white shadow px-4 fixed top-0 left-0 right-0 z-10 flex justify-center items-center">
      <Link to={ROUTER_PATH.main}>
        <img src="img/logo.svg" alt="꼬순내 로고" />
      </Link>
      <button
        onClick={handleButtonClick}
        className="w-[55px] h-14 absolute top-0 right-0"
      >
        <CiSearch size={30} />
      </button>
      {isModalOpen && <SearchModal onClose={handleModalClose} />}
    </header>
  );
};

export default Header;
