import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  position: relative;
`;

export const FoodItem = styled(ListItem)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartItem = styled(ListItem)`
  div.counter {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;