import { FooterContainer } from "./UI/Container"

export default function Footer ({ fixed, children }) {
  return (
    <FooterContainer fixed={fixed}>
      {children}
    </FooterContainer>
  )
}