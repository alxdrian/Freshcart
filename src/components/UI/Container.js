import styled from "@emotion/styled";
import background from "../../assets/images/background.jpg";

export const Container = styled.div`
  margin: 0;
  display: flex;
`;

export const SectionContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  padding: 30px;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
    gap: 10px;
  }

  max-width: 1500px;
  margin-bottom: 60px;
`;

export const HeaderContainer = styled.header`;
  display: flex;
  width: calc(100% - 60px);
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
  }
`;

export const FooterContainer = styled.footer`;
  display: flex;
  width: calc(100% - 60px);
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  ${props => props.fixed && `
    position: fixed;
    bottom: 0;
  `}
  

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
  }
`;

export const ImageContainer = styled(Container)`
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const ImageCartContainer = styled(ImageContainer)`
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const AlterPageContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  padding: 30px 0;
  background-color: #f6f6f9a1;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
  margin: auto auto;
  align-items: center;
  max-height: 80vh;
  overflow: scroll;
  

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;