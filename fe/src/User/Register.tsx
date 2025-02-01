import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButtom from "../components/CustomButtom";
import styled from "styled-components";

const Register = () => {
  const [email, setEmail] = useState("");

  return (
    <RegisterWrapper>
      <h2>회원가입</h2>
      <CustomInput name="이름" type="text" width="260px" InPutPadding="12px" />
      <EmailWrapper>
        <CustomInput
          name="이메일"
          type="email"
          width="260px"
          InPutPadding="12px"
          onChange={(e) => setEmail(e.target.value)}
        />
      </EmailWrapper>
      <CustomInput
        name="비밀번호"
        type="password"
        width="260px"
        InPutPadding="12px"
      />
      <CustomInput
        name="비밀번호 확인"
        type="password"
        width="260px"
        InPutPadding="12px"
      />
      <CustomButtom
        width="280px"
        height="40px"
        buttonColor="active"
        borderColor="white"
        fontColor="white"
      >
        회원가입 완료
      </CustomButtom>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Register;
