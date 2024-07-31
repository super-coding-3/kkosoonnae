import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { EditProfileSchema } from "../../schema/formSchema";

import OuterLayout from "../../components/common/OuterLayout";
import PageTitle from "../../components/common/PageTitle";
import Nav from "../../components/common/Nav";
import BtnSubmit from "../../components/common/BtnSubmit";
import Postcode from "../../components/common/PostCode";
import EditProfileInput from "../../components/editprofile/EditProfileInput";
import EditProfileFormGroup from "../../components/editprofile/EditProfileFormGroup";
import EditProfileErrorMsg from "../../components/editprofile/EditProfileErrorMsg";
import CheckAvailabilityApi from "../../components/common/CheckAvailabilityApi";
import ErrorPage from "../../components/common/ErrorPage";
import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";
import { ROUTER_PATH } from "../../constants/constants";

interface MyProfileType {
  nickName: string;
  phone: string;
  zipCode: string;
  address: string;
  addressDtl: string;
}

const EditProfile: React.FC = () => {
  const [showPostcode, setShowPostcode] = useState<boolean>(false);
  const [doubleCheck, setDoubleCheck] = useState<string>("noProgress");
  const [userNickName, setUserNickName] = useState<string>();
  const [myProfileInfos, setMyProfileInfos] = useState<MyProfileType>({
    nickName: "",
    phone: "",
    zipCode: "",
    address: "",
    addressDtl: "",
  });

  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const handleshowPostcode = () => {
    setShowPostcode(true);
  };

  const handleFormSubmit = async (values: MyProfileType) => {
    if (values.nickName !== userNickName && doubleCheck === "noProgress") {
      showToast({ message: "닉네임 중복확인을 진행해주세요" });
    } else if (doubleCheck === "duplicated") {
      showToast({ message: "이미 사용 중인 닉네임으로 수정할 수 없습니다" });
    } else {
      const response = await handleRequest({
        url: "/api/user/customer/profile/updat",
        method: "PUT",
        body: values,
      });
      if (response.status === 200) {
        showToast({
          message: "프로필 수정을 성공하였습니다",
          action: () => {
            window.location.href = ROUTER_PATH.mypage;
          },
        });
      }
    }
  };

  const handleFormNotChange = (dirty: boolean) => {
    if (!dirty) {
      showToast({ message: "프로필을 수정해주세요" });
    }
  };

  const handleNickNameDoubleCheck = (nickName: string) => {
    const trimmedNickName = nickName.trim().toLowerCase();
    const trimmedUserNickName = userNickName?.trim().toLowerCase();

    if (trimmedNickName === trimmedUserNickName) {
      showToast({ message: "현재 사용 중인 닉네임입니다" });
    } else {
      CheckAvailabilityApi("nickName", nickName, showToast, setDoubleCheck);
    }
  };

  useEffect(() => {
    handleRequest({
      url: "/api/user/customer/profile",
      method: "GET",
      setData: (data: typeof myProfileInfos) => {
        setMyProfileInfos(data);
        setUserNickName(data.nickName);
      },
    });
    setUserNickName(myProfileInfos.nickName);
  }, []);

  const initialValues = myProfileInfos;

  return (
    <OuterLayout>
      <PageTitle title="프로필 수정" leftBtn={true} />
      {Loading}
      {error ? (
        <ErrorPage errorMessage={error} />
      ) : (
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
                    handleNickNameDoubleCheck(values.nickName);
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
                  <EditProfileInput
                    type="text"
                    name="address"
                    disabled={true}
                  />
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
                <Toast />
              </Form>
            )}
          </Formik>
        </div>
      )}
      <Nav />
    </OuterLayout>
  );
};

export default EditProfile;
