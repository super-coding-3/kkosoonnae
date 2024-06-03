# 🐶🐱 반려동물의 미용샵 플랫폼서비스 

![꼬순내 우리댕냥이들의 미모비결 (1)](https://github.com/super-coding-3/kkosoonnae/assets/101633842/4b8d5551-bde5-4bf5-820c-3128ff868519)


- 배포 URL : [https://www.kkosoonnae.store/](https://www.kkosoonnae.store/)
- Test ID : test1
- Test PW : 1234

<br>

## 프로젝트 소개

- 꼬순내는 펫팸족과 전문 반려동물 미용사를 연결하는 플랫폼입니다. 
- 내 반려동물 등록 후 원하는 날짜, 스타일을 예약할수있습니다.
- 검색을 통해 근처 펫미용샵을 알아보고 후기등을 참고 할수있습니다.
- 문의하기, 리뷰관리, 펫정보 등을 수정할수있습니다.

<br>

## 팀원 구성

<div align="center">

<table  align="center">
  <tr>
    <th><img src="https://avatars.githubusercontent.com/u/101633842?v=4" height=150 width=150> </th>
    <th><img src="https://avatars.githubusercontent.com/u/43572462?v=4" width="150" height="150"></th>
    <th><img src="https://avatars.githubusercontent.com/u/162407926?v=4" width="150" height="150" "/></th>
  </tr>
  <tr>
    <td align="center">박유진</td>
    <td align="center">이효경</td>
    <td align="center"> 박우혁</td>
  </tr>
</table>



</div>

<br>

## 1. 개발 환경

- Front : HTML, React, Typescript, Tailwind, 
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github, 
- 협업 툴 : Discord, Notion,
- 서비스 배포 환경 : Varcel
- 디자인 : [Figma](https://www.figma.com/design/blBt17GB6m2L5OEHCmAMtP/%EA%BC%AC%EC%88%9C%EB%82%B4-UI?node-id=41-357&t=f6FakeOd9r1YTGTv-1)
- [커밋 컨벤션](https://www.notion.so/Code-Convention-5e58bf5f877846d0a2613e7d1421807b?pvs=4)
- [네이밍 컨벤션](https://www.notion.so/5ef268be01b34e77994ee97095227ff3?pvs=4)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, Typescript ,Tailwind

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
      
- Typescript
    - TypeScript는 정적 타입 검사를 제공하여 컴파일 시점에 코드의 타입 오류를 발견할 수 있습니다.
    - 개발 도중 발생할 수 있는 런타임 오류를 미리 방지할 수 있습니다.
    - 타입 정의를 통해 코드의 구조와 의도를 파악하기 쉽기 때문에, 유지보수가 용이했습니다

- Tailwind
    - Tailwind는 미리 정의된 유틸리티 클래스를 제공하여 필요한 스타일을 빠르게 적용할 수 있었습니다.
    - 유틸리티 클래스를 활용하여 스타일을 신속하게 적용할 수 있어 프로토타이핑과 개발 속도가 향상되었습니다.
    - Tailwind는 모듈화된 유틸리티 클래스 기반으로 작동하므로, 코드 변경 시 영향 범위를 쉽게 파악할 수 있었습니다.
    

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.
  

### 브랜치 전략

- Git-flow 전략을 기반으로 master 브랜치와 feature 보조 브랜치를 운용했습니다.
- master , feature 브랜치로 나누어 개발을 하였습니다.
    - **master** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **feature** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 역할 분담

### 🐶 박유진

- **UI**
    - 페이지 : 헤더, 푸터, Nav, 홈, 검색 매장리스트, 매장상세, 매장리뷰, 예약하기, 예약확인, 예약완료, 공지사항 
    - 공통 컴포넌트 : Axios 공통, 헤더, 푸터, Nav, datepicker
- **기능**
    - 홈 매장 리스트 조회, 매장 검색, 매장 정보 조회, 매장 리뷰 등록 및 조회, 매장 예약등록 폼, 매장 예약확인 조회, 공지사항 데이터 조회
<br>
    
### 🐱 이효경

- **UI**
    - 페이지 : 마이페이지 홈 ,프로필, 반려동물등록, 예약내역, 관심매장, 문의하기
    - 공통 컴포넌트 : 폼 제출버튼, 삭제/취소 재확인 모달, 제출 완료페이지, 내역이 없을 경우 나오는 페이지
- **기능**
    - 유저 프로필 조회/수정, 반려동물 정보 조회/수정/등록, 미용 예약내역 조회/삭제, 유저가 쓴 리뷰 조회/삭제, 유저의 관심매장 조회/삭제, 유저 내포인트 조회, 유저 문의 등록, 문의내역 조회

<br>

### 🐹 박우혁

- **UI**
    - 페이지 : 로그인, 회원가입, 내주변
    - 공통 컴포넌트 : 페이지 타이틀, 중복확인버튼, 토스트메세지, 주소찾기
- **기능**
    - 회원가입폼 ,로그인폼, 내주변매장 카카오 맵 연결, 내 위치 주변매장 표현/검색, 주변매장 리뷰/컷스타일조회

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-12-09 ~ 2024-12-31
- 기획 : 2024-05-07 ~ 2024-05-12
- UI 구현 : 2024-05-13 ~ 2024-05-19
- 기능 구현 : 2024-05-20 ~ 2024-06-03

<br>

### 작업 관리

- GitHub PR과 디스코드를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 [Notion](https://www.notion.so/511920be91a34f8485c6c91f82d8fd19?pvs=4)에 회의 내용을 기록했습니다.
- WBS 작성하여 프로젝트 범위 명확화하고 진척도 추적을 했습니다.
- ![image](https://github.com/super-coding-3/kkosoonnae/assets/101633842/2eb639d1-7c3c-4a8a-bb63-2ef53ac4cca4)



<br>

## 5. 프로젝트 구조

```
 📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜BtnLogut.tsx
 ┃ ┃ ┣ 📜BtnSubmit.tsx
 ┃ ┃ ┣ 📜CheckAvailabilityApi.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜ModalDelete.tsx
 ┃ ┃ ┣ 📜Nav.tsx
 ┃ ┃ ┣ 📜OuterLayout.tsx
 ┃ ┃ ┣ 📜PageComplete.tsx
 ┃ ┃ ┣ 📜PageNothing.tsx
 ┃ ┃ ┣ 📜PageTitle.tsx
 ┃ ┃ ┣ 📜PostCode.tsx
 ┃ ┃ ┣ 📜ReservationCheckList.tsx
 ┃ ┃ ┣ 📜SubmitBtn.tsx
 ┃ ┃ ┗ 📜ToastMessage.tsx
 ┃ ┣ 📂editprofile
 ┃ ┃ ┣ 📜EditProfileBtn.tsx
 ┃ ┃ ┣ 📜EditProfileErrorMsg.tsx
 ┃ ┃ ┣ 📜EditProfileFormGroup.tsx
 ┃ ┃ ┣ 📜EditProfileInput.tsx
 ┃ ┃ ┗ 📜EditProfileLabel.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜LoginPage.tsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜EventBtn.tsx
 ┃ ┃ ┣ 📜MainCarousel.tsx
 ┃ ┃ ┣ 📜MainContent.tsx
 ┃ ┃ ┗ 📜MainStoreList.tsx
 ┃ ┣ 📂mylikestore
 ┃ ┃ ┗ 📜MyLikeStoreCard.tsx
 ┃ ┣ 📂mylocationstore
 ┃ ┃ ┣ 📜KakaoMap.tsx
 ┃ ┃ ┣ 📜LocationApi.tsx
 ┃ ┃ ┣ 📜StoreList.tsx
 ┃ ┃ ┗ 📜StyleSlider.tsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📜MyPageMainBtn.tsx
 ┃ ┃ ┣ 📜MyPagePetAdd.tsx
 ┃ ┃ ┗ 📜MyPagePetInfo.tsx
 ┃ ┣ 📂mypet
 ┃ ┃ ┣ 📜BtnMyPetGender.tsx
 ┃ ┃ ┣ 📜CustomDatePickerMyPet.tsx
 ┃ ┃ ┣ 📜ImgMyPet.tsx
 ┃ ┃ ┣ 📜InputMyPet.tsx
 ┃ ┃ ┗ 📜SelectMyPetGender.tsx
 ┃ ┣ 📂myqna
 ┃ ┃ ┗ 📜MyQnACard.tsx
 ┃ ┣ 📂myreservation
 ┃ ┃ ┣ 📜MyReservationCard.tsx
 ┃ ┃ ┗ 📜MyReservationDetail.tsx
 ┃ ┣ 📂myreview
 ┃ ┃ ┗ 📜MyReviewCard.tsx
 ┃ ┣ 📂notice
 ┃ ┃ ┗ 📜NoticeAccordion.tsx
 ┃ ┣ 📂registerqna
 ┃ ┃ ┣ 📜RegisterQnAForm.tsx
 ┃ ┃ ┗ 📜RegisterQnAFormGroup.tsx
 ┃ ┣ 📂reservation
 ┃ ┃ ┣ 📜MyKkosoonaeModal.tsx
 ┃ ┃ ┣ 📜ReservationDatepicker.tsx
 ┃ ┃ ┣ 📜ReservationDropDown.tsx
 ┃ ┃ ┣ 📜ReservationForm.tsx
 ┃ ┃ ┣ 📜ReservationFormGroup.tsx
 ┃ ┃ ┣ 📜ReservationOk.tsx
 ┃ ┃ ┣ 📜ReservationTextArea.tsx
 ┃ ┃ ┗ 📜ReservationTimeRadio.tsx
 ┃ ┣ 📂salon
 ┃ ┃ ┣ 📜FavoriteButton.tsx
 ┃ ┃ ┣ 📜ReviewForm.tsx
 ┃ ┃ ┣ 📜SalonCarousel.tsx
 ┃ ┃ ┣ 📜SalonInfo.tsx
 ┃ ┃ ┣ 📜SalonReview.tsx
 ┃ ┃ ┣ 📜SalonReviewList.tsx
 ┃ ┃ ┣ 📜SalonStyle.tsx
 ┃ ┃ ┣ 📜SalonStyleCard.tsx
 ┃ ┃ ┗ 📜SalonTab.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜SeacrhInput.tsx
 ┃ ┃ ┣ 📜SearchModal.tsx
 ┃ ┃ ┗ 📜SearchRecent.tsx
 ┃ ┗ 📂signup
 ┃ ┃ ┣ 📜FormFields.tsx
 ┃ ┃ ┗ 📜SignUpPage.tsx
 ┣ 📂constants
 ┃ ┗ 📜constants.tsx
 ┣ 📂page
 ┃ ┣ 📜AddMyPet.tsx
 ┃ ┣ 📜EditMyPet.tsx
 ┃ ┣ 📜EditProfile.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜MyLikeStore.tsx
 ┃ ┣ 📜MyLocationStore.tsx
 ┃ ┣ 📜MyPage.tsx
 ┃ ┣ 📜MyQnA.tsx
 ┃ ┣ 📜MyReservation.tsx
 ┃ ┣ 📜MyReview.tsx
 ┃ ┣ 📜Notice.tsx
 ┃ ┣ 📜RegisterQnA.tsx
 ┃ ┣ 📜Reservation.tsx
 ┃ ┣ 📜Salon.tsx
 ┃ ┗ 📜Signup.tsx
 ┣ 📂schema
 ┃ ┗ 📜formSchema.tsx
 ┣ 📂utils
 ┃ ┗ 📂api
 ┃ ┃ ┗ 📜customAxios.ts
 ┣ 📜App.tsx
 ┣ 📜CustomRouter.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

<br/>




