import CartCard from "../components/CartCard";
import FoodList from "../components/FoodList";
import Header from "../components/Header";
import { SectionContainer } from "../components/UI/Container";
import { Title } from "../components/UI/Text";

export default function Cart() {
  return (
    <>
      <Header />
      <SectionContainer>
        <Title>My Cart</Title>
        <FoodList>
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