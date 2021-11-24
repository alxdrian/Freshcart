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
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
  }
`;
