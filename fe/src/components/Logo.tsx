import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoWrapper>
            <img src="../../public/logo.png" alt="로고 이미지 입니다." />
            <h1>세&nbsp;우&nbsp;미</h1>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    height: fit-content;
    display: flex;
    padding: 10px;
    img {
        width: 60px;
        height: 80px;
        margin-right: 16px;
    }
    h1 {
        font-weight: bold;
        color: ${(props) => props.theme.color.main};
    }
`;

export default Logo;
