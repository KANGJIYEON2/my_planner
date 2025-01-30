import { Link } from 'react-router-dom';
import CustomButtom from '../components/CustomButtom';
import CustomInput from '../components/CustomInput';
import Logo from '../components/Logo';

const Login = () => {
    return (
        <div>
            <div>
                <Logo />
                <h2>여정을 위해, 로그인하기</h2>
            </div>
            <CustomInput name="아이디" type="text" />
            <CustomInput name="비밀번호" type="password" />
            <CustomButtom>버튼</CustomButtom>
            <div>
                <Link to="/register">회원가입</Link>
                <Link to="/reset-password">비밀번호 찾기</Link>
            </div>
        </div>
    );
};

export default Login;
