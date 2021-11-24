import FoodCard from "../components/FoodCard";
import FoodList from "../components/FoodList";
import Header from "../components/Header";
import { SectionContainer } from "../components/UI/Container";
import { ContentXLarge, HeadingMedium } from "../components/UI/Text";

export default function Home() {
  return (
    <>
      <Header />
      <SectionContainer>
        <ContentXLarge>Enjoy our foods...</ContentXLarge>
        <FoodList>
          <FoodCard
            name="Pizza"
            price={1000}
            image="https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg"
          />
        </FoodList>
      </SectionContainer>
    </>
  );
}