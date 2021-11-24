import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  background-color: #4bbd2e;
  color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const IconButton = styled(Button)`
  width: 40px;
  height: 40px;
  position: absolute;
`;