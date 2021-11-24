import FoodCard from "../components/FoodCard";
import FoodList from "../components/FoodList";
import Header from "../components/Header";
import { SectionContainer } from "../components/UI/Container";
import { ContentRegular, ContentXLarge } from "../components/UI/Text";
import { useEffect, useState } from "react";
import { GetFoodsFetch } from "../services/fetchFoods";
import Footer from "../components/Footer";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await GetFoodsFetch();
      setFoods(response);
    };
    fetchFoods();
   }, []);
        
  return (
    <>
      <Header />
      <SectionContainer>
        <ContentXLarge>Enjoy our foods...</ContentXLarge>
        <FoodList>
          {foods?.map(food => (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              image={food.image}
              description={food.description} 
            />
         ))}
        </FoodList>
      </SectionContainer>
      <Footer>
        <ContentRegular>FreshCart - Made by Alecx Adrian De la Cruz Lopez </ContentRegular>
        <ContentRegular>© 2021</ContentRegular>
      </Footer>
    </>
  );
}