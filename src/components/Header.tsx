import styled from "styled-components";
import { loginWithGithub, loginWithGoole, logout } from "../api/firebase";

const Header = () => {
    return (
        <HeaderNav>
            <button onClick={loginWithGoole}>구글로그인</button>
            <button onClick={logout}>구글로그아웃</button>
            <button onClick={loginWithGithub}>깃로그인</button>
        </HeaderNav>
    );
};

const HeaderNav = styled.header``;
const Logo = styled.div``;
const Login = styled.div``;

export default Header;
