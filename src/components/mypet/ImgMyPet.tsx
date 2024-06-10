import React, { SetStateAction } from "react";

import { FormikProps } from "formik";
import { LuSwitchCamera } from "react-icons/lu";

interface ImgMyPetProps {
  img: string;
  setFieldValue: FormikProps<any>["setFieldValue"];
}

const ImgMyPet: React.FC<ImgMyPetProps> = (props) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];
    if (!imgFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        props.setFieldValue("petImg", reader.result);
        props.setFieldValue("petImgData", imgFile);
        resolve();
      };
    });
  };

  return (
    <div className="flex justify-center w-full mb-5">
      <div className="relative w-fit">
        <img
          className="rounded-full size-36 border-2 border-COMMONN_BORDER_GRAY"
          src={props.img == "" ? "/img/common/icon-dog-sitdown.svg" : props.img}
        />
        <div className="absolute size-10 bottom-0 right-0">
          <label
            className="flex justify-center items-center size-full rounded-full bg-MAIN_COLOR cursor-pointer"
            htmlFor="input-img"
          >
            <LuSwitchCamera color="#F4F6F1" size="25px" />
          </label>
          <input
            type="file"
            id="input-img"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgMyPet;
