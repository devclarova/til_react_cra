import React, { useState } from "react";
import RegisterForm from "../components/form/RegisterForm";

function RegisterPage() {
  // js 자리
  // 백엔드로 보낼 데이터를 위한 리액트 변수
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pass: "",
    user_pass_confirm: "",
    user_nickname: "",
    user_birth: "",
    user_gender: "남성",
    user_interest_default: ["코딩", "여행", "디자인", "운동", "기타"],
    user_interest: [],
    user_location_default: ["서울", "경기", "대구", "부산", "광주"],
    user_Location: "",
    user_intro: "",
    user_image: null,
    user_image_preview: "",
  });
  //   필수 항목 체크 오류 메시지 리액트 변수
  const [errMessage, setErrMessage] = useState("");

  // 이벤트 처리
  const handleChange = e => {
    // const temp = { [e.target.name]: e.target.value };
    // const newData = { ...formData, ...temp };
    // setFormData({ ...newData });
    const temp = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...temp });
  };
  // 체크박스 배열 처리
  const handleCheckBoxChange = e => {
    const { name, value, checked } = e.target;
    if (checked) {
      // 체크된 항목 추가하는 경우
      const arr = [...formData.user_interest, value];
      setFormData({ ...formData, user_interest: arr });
    } else {
      // 체크를 해제하는 경우 (value에 들어온 값을 비교한다.)
      const arr = formData.user_interest.filter(item => item != value);
      setFormData({ ...formData, user_interest: arr });
    }
  };
  // 이미지 미리보기 및 file 업로드 관리
  const handleFilePreview = () => {};

  //   jsx 자리
  return (
    <div>
      <h1>회원가입</h1>
      <RegisterForm
        formData={formData}
        errMessage={errMessage}
        handleChange={handleChange}
        handleCheckBoxChange={handleCheckBoxChange}
        handleFilePreview={handleFilePreview}
      />
    </div>
  );
}

export default RegisterPage;
