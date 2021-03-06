import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  gap: 5px;
  padding: 5px 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  background-color: #4bbd2e;
  color: #ffff;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const IconButton = styled(Button)`
  width: 40px;
  height: 40px;
  position: absolute;
  padding: 0;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

export const HomeButton = styled(IconButton)`
  top: 10px;
  right: 10px;
`;