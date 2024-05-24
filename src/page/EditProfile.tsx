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

interface MyProfileType {
  nickName: string;
  phone: string;
  zipCode: string;
  address: string;
  addressDtl: string;
}

const EditProfile: React.FC = () => {
  const [showPostcode, setShowPostcode] = useState<boolean>(false);
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
    HttpClient.put("/KkoSoonNae/customer/profile/update", values)
      .then((response) => {
        alert("프로필 수정 성공하였습니다");
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  const getMyProfile = async (): Promise<MyProfileType> => {
    const res = await HttpClient.get("/KkoSoonNae/customer/profile");
    return res.data;
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getMyProfile();
      setMyProfileInfos(profileData);
    };

    fetchProfile();
  }, []);

  const initialValues = myProfileInfos;

  return (
    <OuterLayout>
      <PageTitle title="프로필 수정" leftBtn={true} />
      <div className="flex justify-center items-center mt-5 mb-24 mx-5 font-bold">
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={EditProfileSchema}
          enableReinitialize={true}
        >
          {({ setFieldValue, values }) => (
            <Form className="flex flex-col gap-3 w-full">
              <EditProfileFormGroup
                label="닉네임"
                inputType="text"
                name="nickName"
                inputDisabled={false}
                btnActive={true}
                btnValue="중복체크"
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
              <BtnSubmit value="수정하기" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default EditProfile;
