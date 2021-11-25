import styled from "@emotion/styled";
import { Container, ImageCartContainer } from "./UI/Container";
import { CartItem } from "./UI/List";
import { HeadingMedium, Price } from "./UI/Text";
import Counter from "./Counter";
import { IconButton } from "./UI/Button";
import { TrashIcon } from "./Icons";
import { useOrderContext } from "../contexts/OrderContext";

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

const DeleteFood = styled(IconButton)`
  top: 5px;
  left: 5px;
`

export default function CartCard({id, name, price, image, count}) {
  const orderData = useOrderContext();  

  function handleDeleteFood() {
    orderData.removeFood(id);
 }
  
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
        <Counter id={id} count={count}/>
        <PartialPrice>$ {price * count}</PartialPrice>
      </CounterContainer>
      <DeleteFood onClick={handleDeleteFood}>
        <TrashIcon />
      </DeleteFood>
    </CartItem>
  );
}