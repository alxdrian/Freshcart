import styled from "@emotion/styled";
import { Container, ImageCartContainer } from "./UI/Container";
import { CartItem } from "./UI/List";
import { HeadingMedium, Price } from "./UI/Text";
import Counter from "./Counter";

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

const CounterContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  background-color: #e6e6e6;
  border-radius: 10px;

  @media (max-width: 768px) {
    bottom: 7px;
    right: 15px;
 }
`

const PartialPrice = styled.div`
  padding: 0 7px 0 3px;
  color: #333333;
`

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
      <CounterContainer>
        <Counter />
        <PartialPrice>$ 10000</PartialPrice>
      </CounterContainer>
    </CartItem>
  );
}