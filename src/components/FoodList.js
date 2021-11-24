import styled from "@emotion/styled";
import { List } from "./UI/List";

const Foods = styled(List)`
  justify-content: center;
  gap: 40px;
`;

export default function FoodList({ children }) {
  return (
    <Foods>
      {children}
    </Foods>
  );
}