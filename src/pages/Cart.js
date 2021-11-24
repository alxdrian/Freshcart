import styled from "@emotion/styled";
import CartCard from "../components/CartCard";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartIcon, CreditIcon, DolarIcon, TrashIcon } from "../components/Icons";
import { Container, SectionContainer } from "../components/UI/Container";
import { Title, ContentLarge, HeadingSmall, HeadingMedium, Price } from "../components/UI/Text";
import { Button, IconButton } from "../components/UI/Button";

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
  return (
    <>
      <Header />
      <SectionContainer>
        <TitleContainer>
          <div>
            <Title>My Cart</Title>
            <CartIcon/>
          </div>
          <Button>
            <TrashIcon /><ContentLarge>Delete</ContentLarge>
          </Button>
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
      <Footer fixed={true}>
        <TotalContainer>
          <DolarIcon />
          <HeadingMedium>TOTAL</HeadingMedium>
          <Price>$1000</Price>
        </TotalContainer>
        <Button>
          <CreditIcon /><ContentLarge>Pay order</ContentLarge>
        </Button>
      </Footer>
    </>
  );
}