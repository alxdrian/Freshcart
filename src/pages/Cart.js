import styled from "@emotion/styled";
import CartCard from "../components/CartCard";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartIcon, CreditIcon, DolarIcon, TrashIcon } from "../components/Icons";
import { Container, SectionContainer } from "../components/UI/Container";
import { Title, ContentLarge, HeadingMedium, Price } from "../components/UI/Text";
import { Button } from "../components/UI/Button";
import { useOrderContext } from "../contexts/OrderContext";
import { useEffect, useState } from "react";

const TitleContainer = styled(Container)`
  width: 100%;
  justify-content: space-around;
  height: 40px;
  padding: 10px 0;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 10px;

  div {
    display: flex;
    gap: 20px;
  }

  svg {
    width: 40px;
    color: #333333;
  }

  button svg {
    width: 20px;
    color: #ffffff;
  }
`;

const TotalContainer = styled(Container)`
  gap: 10px;
  align-items: center;
  height: 40px;

  svg {
    color: #333333;
    height: 30px;
    width: 30px;
  }
`;

export default function Cart() {
  const orderData = useOrderContext();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setOrder(orderData.foods);
  }, [orderData]);

  function handleDelete() {
    setOrder([]);
    orderData.cleanOrder();
  }

  return (
    <>
      <Header />
      <SectionContainer>
        <TitleContainer>
          <div>
            <Title>My Cart</Title>
            <CartIcon/>
          </div>
          <Button onClick={handleDelete}>
            <TrashIcon /><ContentLarge>Delete</ContentLarge>
          </Button>
        </TitleContainer>
        <FoodList>
          {order.map((food) => 
            <CartCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              image={food.image}
              count={food.count}
            />
           )}
        </FoodList>
      </SectionContainer>
      <Footer fixed={true}>
        <TotalContainer>
          <DolarIcon />
          <HeadingMedium>TOTAL</HeadingMedium>
          <Price>$ {order.reduce((acc, food) => acc + food.price * food.count, 0)}</Price>
        </TotalContainer>
        <Button>
          <CreditIcon /><ContentLarge>Pay order</ContentLarge>
        </Button>
      </Footer>
    </>
  );
}