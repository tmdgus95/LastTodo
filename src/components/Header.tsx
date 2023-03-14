import styled from "styled-components";
import { login, login2 } from "../api/firebase";

const Header = () => {
    return (
        <HeaderNav>
            <button onClick={login2}>로그인</button>
        </HeaderNav>
    );
};

const HeaderNav = styled.header``;
const Logo = styled.div``;
const Login = styled.div``;

export default Header;
