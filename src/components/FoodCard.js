import styled from "@emotion/styled";
import { ArrowUpIcon, ArrowDownIcon, CartIcon, PlusIcon } from "./Icons";
import { IconButton } from "./UI/Button";
import { Container } from "./UI/Container";
import { ListItem } from "./UI/List";
import { ContentLarge, ContentXSmall, ContentSmall, HeadingMedium } from "./UI/Text";
import { useState } from "react";

const FoodItem = styled(ListItem)`
  border-radius: 20px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
  position: relative;
`

const ImageContainer = styled(Container)`
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const FoodDetails = styled(Container)`
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 170px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 10px 10px 15px 10px;
    width: 130px;
  }
`;

const Price = styled(ContentLarge)`
  color: #4bbd2e;
  font-weight: 600;
`;

const FoodIcon = styled(IconButton)`
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
   
  div {
    display: flex;
    justify-content: space-between;
    color: #4bbd2e;
    font-weight: 600;
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
    max-height: 150px;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    p {
      margin-top: 35px;
    }

    @media (max-width: 768px) {
      background-color: #ffffff;
      padding: 10px;
      z-index: 1;
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
      border-radius: 0 0 20px 20px;
    }
  }
`;



export default function FoodCard({ name, price, image, description }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  return (
    <FoodItem>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <FoodDetails>
        <div>
          <HeadingMedium>{name}</HeadingMedium>
          <Price>$ {price}</Price>
        </div>
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
        {isAdded ? <CartIcon /> : <PlusIcon />}
      </FoodIcon>
    </FoodItem>
  );
}