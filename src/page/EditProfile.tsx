import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { EditProfileSchema } from "../schema/formSchema";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import BtnSubmit from "../components/common/BtnSubmit";
import Postcode from "../components/common/PostCode";
import EditProfileInput from "../components/editprofile/EditProfileInput";
import EditProfileFormGroup from "../components/editprofile/EditProfileFormGroup";
import EditProfileErrorMsg from "../components/editprofile/EditProfileErrorMsg";
import CheckAvailabilityApi from "../components/common/CheckAvailabilityApi";
import ToastMessage from "../components/common/ToastMessage";

interface MyProfileType {
  nickName: string;
  phone: string;
  zipCode: string;
  address: string;
  addressDtl: string;
}

const EditProfile: React.FC = () => {
  const [showPostcode, setShowPostcode] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [doubleCheck, setDoubleCheck] = useState<string>("noProgress");
  const [userNinkName, setUserNinkName] = useState<string | null>(null);
  const [myProfileInfos, setMyProfileInfos] = useState<MyProfileType>({
    nickName: "",
    phone: "",
    zipCode: "",
    address: "",
    addressDtl: "",
  });

  const handleshowPostcode = () => {
    setShowPostcode(true);
  };

  const handleFormSubmit = (values: MyProfileType) => {
    if (values.nickName !== userNinkName && doubleCheck === "noProgress") {
      setToastMessage("닉네임 중복확인을 진행해주세요");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    } else if (doubleCheck === "duplicated") {
      setToastMessage("이미 사용 중인 닉네임으로 수정할 수 없습니다");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    } else {
      HttpClient.put("/api/user/customer/profile/update", values)
        .then(() => {
          setToastMessage("프로필 수정을 성공하였습니다");
          setTimeout(() => {
            window.location.href = "/mypage";
          }, 1000);
        })
        .catch((error: any) => {
          setToastMessage(error);
          setTimeout(() => {
            setToastMessage(null);
          }, 1000);
        });
    }
  };

  const handleFormNotChange = (dirty: boolean) => {
    if (!dirty) {
      setToastMessage("프로필을 수정해주세요");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    }
  };

  const handlerNickNameDoubleCheck = async (nickName: string) => {
    if (nickName === userNinkName) {
      setToastMessage("현재 사용 중인 닉네임입니다");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    } else {
      await CheckAvailabilityApi(
        "nickName",
        nickName,
        setToastMessage,
        setDoubleCheck
      );
    }
  };

  const getMyProfile = async (): Promise<MyProfileType> => {
    const res = await HttpClient.get("/api/user/customer/profile");
    return res.data;
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getMyProfile();
      setMyProfileInfos(profileData);
      setUserNinkName(profileData.nickName);
    };

    fetchProfile();
  }, []);

  const initialValues = myProfileInfos;

  return (
    <OuterLayout>
      <PageTitle title="프로필 수정" leftBtn={true} />
      <div className="flex justify-center items-center pt-4 px-4 font-bold">
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={EditProfileSchema}
          enableReinitialize={true}
        >
          {({ setFieldValue, values, dirty }) => (
            <Form className="flex flex-col gap-3 w-full">
              <EditProfileFormGroup
                label="닉네임"
                inputType="text"
                name="nickName"
                inputDisabled={false}
                btnActive={true}
                btnValue="중복확인"
                onClick={() => {
                  handlerNickNameDoubleCheck(values.nickName);
                }}
              />
              <EditProfileFormGroup
                label="전화번호"
                inputType="tel"
                name="phone"
                inputDisabled={false}
                btnActive={false}
              />
              <EditProfileFormGroup
                label="주소"
                inputType="text"
                name="zipCode"
                inputDisabled={true}
                btnActive={true}
                btnValue="우편번호 찾기"
                onClick={handleshowPostcode}
              />
              <Postcode
                onAddressSelect={(addressData) => {
                  setFieldValue("postCode", addressData.postCode);
                  setFieldValue("address", addressData.address);
                  setFieldValue("addressDtl", addressData.addressDetail);
                }}
                showPostcode={showPostcode}
                setShowPostcode={setShowPostcode}
              />
              <div className="flex flex-col ml-20 gap-3">
                <EditProfileInput type="text" name="address" disabled={true} />
                <EditProfileErrorMsg name="address" />
                <EditProfileInput
                  type="text"
                  name="addressDtl"
                  disabled={false}
                />
                <EditProfileErrorMsg name="addressDtl" />
              </div>
              <BtnSubmit
                value="수정하기"
                type={dirty === true ? "submit" : "button"}
                active={dirty}
                onClick={() => {
                  handleFormNotChange(dirty);
                }}
              />
              {toastMessage && <ToastMessage message={toastMessage} />}
            </Form>
          )}
        </Formik>
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default EditProfile;
