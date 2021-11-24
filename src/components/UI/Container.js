import styled from "@emotion/styled";

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
`;

export const HeaderContainer = styled.header`;
  display: flex;
  width: calc(100% - 60px);
  padding: 10px 30px;
  align-items: center;
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
  justify-content: space-between;
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