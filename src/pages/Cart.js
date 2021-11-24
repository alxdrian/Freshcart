import styled from "@emotion/styled";
import CartCard from "../components/CartCard";
import FoodList from "../components/FoodList";
import Header from "../components/Header";
import { CartIcon } from "../components/Icons";
import { Container, SectionContainer } from "../components/UI/Container";
import { Title } from "../components/UI/Text";

const TitleContainer = styled(Container)`
  width: 100%;
  justify-content: center;
  height: 40px;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 10px;

  svg {
    width: 40px;
    color: #333333;
  }
`;

export default function Cart() {
  return (
    <>
      <Header />
      <SectionContainer>
        <TitleContainer>
          <Title>My Cart</Title>
          <CartIcon/>
        </TitleContainer>
        <FoodList>
          <CartCard
            image="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
            name="Lamb tomato and sweet spices"
            price={1000}
          />
          <CartCard
            image="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
            name="Lamb tomato and sweet spices"
            price={1000}
          />
          <CartCard
            image="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
            name="Lamb tomato and sweet spices"
            price={1000}
          />
          <CartCard
            image="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
            name="Lamb tomato and sweet spices"
            price={1000}
          />
        </FoodList>
      </SectionContainer>
    </>
  );
}