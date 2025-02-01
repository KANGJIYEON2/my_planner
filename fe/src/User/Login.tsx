import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import CustomButtom from "../components/CustomButtom";
import CustomInput from "../components/CustomInput";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <Logo />
        <h2>여정을 위해, 로그인하기</h2>
      </LogoWrapper>
      <InputWrapper>
        <CustomInput
          name="아이디"
          type="text"
          width="260px"
          InPutPadding="12px"
        />
        <CustomInput
          name="비밀번호"
          type="password"
          width="260px"
          InPutPadding="12px"
        />
      </InputWrapper>
      <div>
        <CustomButtom
          width="280px"
          height="40px"
          buttonColor="active"
          borderColor="white"
          fontColor="white"
        >
          로그인
        </CustomButtom>
      </div>
      <UserWrapper>
        <StyledNavLink to="/register">회원가입</StyledNavLink>
        <StyledNavLink to="/reset-password">비밀번호 찾기</StyledNavLink>
      </UserWrapper>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  h2 {
    margin-top: 4px;
    color: ${(props) => props.theme.color.second};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
`;

const UserWrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 40px;
`;

const StyledNavLink = styled(NavLink)`
  color: gray;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  &:link {
    transition: 0.2s;
    text-decoration: none;
  }
  &:hover {
    color: ${(props) => props.theme.color.second};
  }
  &.active {
    color: ${(props) => props.theme.color.second};
    position: relative;
    top: 2px;
  }
`;

export default Login;
