import styled from "@emotion/styled";
import { HeaderContainer } from "./UI/Container";

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <p>FreshCart</p>
        <p>Login</p>
      </HeaderContent>
    </HeaderContainer>
  );
}