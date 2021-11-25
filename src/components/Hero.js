import styled from "@emotion/styled";
import background from "../assets/images/background.jpg";

const HeroContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroSlogan = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 60px;
  line-height: 80px;
  text-align: center;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 55px;
 }
`;

export const HeroContent = styled.div`
  color: #3f3f3f;
  width: calc(100% - 10px);
  background-color: #f6f6f9a1;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export default function Hero({ children }) {
  return (
    <HeroContainer>
      <HeroContent>
        {children}
      </HeroContent>
    </HeroContainer>
  );
}