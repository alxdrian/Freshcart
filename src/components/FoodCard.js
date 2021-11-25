import styled from "@emotion/styled";
import { ArrowUpIcon, ArrowDownIcon, CartIcon, PlusIcon } from "./Icons";
import { IconButton } from "./UI/Button";
import { Container } from "./UI/Container";
import { FoodItem } from "./UI/List";
import { Price, ContentXSmall, ContentSmall, HeadingMedium } from "./UI/Text";
import { ImageContainer } from "./UI/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../contexts/OrderContext";

const FoodDetails = styled(Container)`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 170px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    width: 130px;
    justify-content: space-between;
  }
`;

const FoodIcon = styled(IconButton)`
  top: 10px;
  left: 10px;
  cursor: pointer;

  a {
    color: #ffffff;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
   
  div {
    display: flex;
    justify-content: space-between;
    color: #4bbd2e;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  div.descriptionText {
    color: #000000;
    font-weight: 400;
    position: absolute;
    top: 20px;
    width: 100%;
    padding: 10px;
    left: -10px;
    max-height: 80px;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      background-color: #ffffff;
      z-index: 1;
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
      border-radius: 0 0 20px 20px;
    }
  }
`;

export default function FoodCard({ id, name, price, image, description }) {
  const orderData = useOrderContext();
  const [isAdded, setIsAdded] = useState(orderData.foods.filter(item => item.id === id).length != 0);
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  function handleAddFood(e) {
    e.preventDefault();
    const food = {
      id: id,
      name: name,
      price: price,
      image: image,
      count: 1,
    }
    orderData.addFood(food)
    setIsAdded(!isAdded);
  }

  return (
    <FoodItem>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <FoodDetails>
        <HeadingMedium>{name}</HeadingMedium>
        <Price>$ {price}</Price>
        <Description>
          <div onClick={toggleExpand}>
            <ContentSmall>Description</ContentSmall>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
          {isExpanded && 
          <div className="descriptionText">
          <ContentXSmall>{description}</ContentXSmall>
          </div>
          }
        </Description>
      </FoodDetails>
      <FoodIcon>
        {isAdded ? 
          <Link to="/cart">
            <CartIcon />
          </Link> : 
          <PlusIcon onClick={handleAddFood}/>
        }
      </FoodIcon>
    </FoodItem>
  );
}