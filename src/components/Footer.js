import styled from "@emotion/styled"
import { FooterContainer } from "./UI/Container"

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
`;

export default function Footer ({ fixed, children }) {
  return (
    <FooterContainer fixed={fixed}>
      <FooterContent>
      {children}
      </FooterContent>
    </FooterContainer>
  )
}