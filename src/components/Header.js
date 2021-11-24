import styled from "@emotion/styled";
import { Container, HeaderContainer } from "./UI/Container";
import { Button } from "./UI/Button";
import { ContentLarge } from "./UI/Text";
import { Title } from "./UI/Text";
import { BagIcon, CartIcon, LoginIcon, LogoutIcon, SignupIcon } from "./Icons";
import { Link } from "react-router-dom";

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const ButtonsContainer = styled(Container)`
  gap: 10px;

  @media (max-width: 425px) {
    p {
      display: none;
    }
  }
`;

const Logo = styled(Title)`
  color: #4bbd2e;
  font-weight: 900;
  height: 40px;
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo><BagIcon/> FreshCart</Logo>
        </Link>
        <ButtonsContainer>
          <Link to="/login">
            <Button><LoginIcon /><ContentLarge>Login</ContentLarge></Button>
          </Link>
          <Link to="/signup">
            <Button><SignupIcon /><ContentLarge>Signup</ContentLarge></Button>
          </Link>
          <Link to="/cart">
            <Button><CartIcon /><ContentLarge>Cart</ContentLarge></Button>
          </Link>
          <Button><LogoutIcon /><ContentLarge>Logout</ContentLarge></Button>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}