import React, { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface FavoriteButtonProps {
  onClick?: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteHandleClick = () => {
    setIsFavorite(!isFavorite);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={onFavoriteHandleClick}>
      {isFavorite ? (
        <FaHeart style={{ color: "pink" }} />
      ) : (
        <FaRegHeart style={{ color: "gray" }} />
      )}
    </button>
  );
};

export default FavoriteButton;
