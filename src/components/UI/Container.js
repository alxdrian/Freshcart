import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0;
  display: flex;
`;

export const SectionContainer = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  padding: 30px;
  gap: 30px;
  max-width: 1080px;
`;

export const HeaderContainer = styled.header`
  margin: 0;
  display: flex;
  width: calc(100% - 40px);
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;
