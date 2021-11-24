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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;