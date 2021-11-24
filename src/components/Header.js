import styled from "@emotion/styled";
import { Container, HeaderContainer } from "./UI/Container";
import { Button } from "./UI/Button";
import { ContentLarge } from "./UI/Text";
import { Title } from "./UI/Text";

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled(Container)`
  gap: 20px;
`;

const Logo = styled(Title)`
  color: #4bbd2e;
  font-weight: 900;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>FreshCart</Logo>
        <ButtonsContainer>
          <Button><ContentLarge>Signup</ContentLarge></Button>
          <Button><ContentLarge>Login</ContentLarge></Button>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}