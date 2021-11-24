import styled from "@emotion/styled";
import { Container } from "./UI/Container";
import { ListItem } from "./UI/List";
import { ContentLarge, HeadingMedium } from "./UI/Text";

const FoodItem = styled(ListItem)`
  width: 100%;
  max-width: 250px;
  border-radius: 20px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
`

const ImageContainer = styled(Container)`
  object-fit: contain;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const FoodDetails = styled(Container)`
  padding: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Price = styled(ContentLarge)`
  color: #4bbd2e;
  font-weight: 600;
`

export default function FoodCard({ name, description, price, image }) {
  return (
    <FoodItem>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <FoodDetails>
        <div>
          <HeadingMedium>{name}</HeadingMedium>
          <Price>$ {price}</Price>
        </div>
      </FoodDetails>
    </FoodItem>
  );
}