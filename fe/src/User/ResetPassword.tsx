import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButtom from "../components/CustomButtom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  return (
    <ResetWrapper>
      <h2>비밀번호 찾기</h2>
      <CustomInput
        name="이메일 입력"
        type="email"
        width="260px"
        InPutPadding="12px"
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomButtom
        width="280px"
        height="40px"
        buttonColor="active"
        borderColor="white"
        fontColor="white"
      >
        인증코드 받기
      </CustomButtom>
      <CustomInput
        name="인증 코드 입력"
        type="text"
        width="260px"
        InPutPadding="12px"
        onChange={(e) => setCode(e.target.value)}
      />
      <CustomInput
        name="새 비밀번호"
        type="password"
        width="260px"
        InPutPadding="12px"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <CustomInput
        name="새 비밀번호 확인"
        type="password"
        width="260px"
        InPutPadding="12px"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CustomButtom
        width="280px"
        height="40px"
        buttonColor="active"
        borderColor="white"
        fontColor="white"
      >
        비밀번호 변경
      </CustomButtom>
    </ResetWrapper>
  );
};

const ResetWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: ${(props) => props.theme.color.second};
  font-size: 16px;
  cursor: pointer;
`;

export default ResetPassword;
