import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0;
  display: flex;
`;

export const PageContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
  padding: 30px;
  gap: 30px;
  max-width: 1080px;
`;

export const HeaderContainer = styled(Container)`
  width: calc(100% - 40px);
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
