import styled from "@emotion/styled";
import { Container, ImageCartContainer } from "./UI/Container";
import { CartItem } from "./UI/List";
import { HeadingMedium, Price } from "./UI/Text";

const CartDetails = styled(Container)`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 180px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 150px;
    justify-content: space-between;
  }
`;

export default function CartCard({name, price, image}) {
  return (
    <CartItem>
      <ImageCartContainer>
        <img src={image} alt={name} />
      </ImageCartContainer>
      <CartDetails>
        <div>
          <HeadingMedium>{name}</HeadingMedium>
          <Price>$ {price}</Price>
        </div>
      </CartDetails>
    </CartItem>

  );
}