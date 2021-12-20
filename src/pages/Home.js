import FoodCard from "../components/FoodCard";
import FoodList from "../components/FoodList";
import Header from "../components/Header";
import { SectionContainer } from "../components/UI/Container";
import { ContentRegular, Title} from "../components/UI/Text";
import { useEffect, useState } from "react";
import FoodsFetch from "../services/FetchFoods";
import Footer from "../components/Footer";
import Hero, { HeroSlogan } from "../components/Hero";
import { SearchForm } from "../components/UI/SearchForm";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await FoodsFetch();
      setFoods(response);
    };
    fetchFoods();
   }, []);
        
  return (
    <>
      <Header />
      <Hero>
        <HeroSlogan>Find your favorite dessert...</HeroSlogan>
        <SearchForm />
      </Hero>
      <SectionContainer>
        <Title>Enjoy our foods...</Title>
        <FoodList>
          {foods?.map(food => (
            <FoodCard
              key={food.id}
              id={food.id}
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