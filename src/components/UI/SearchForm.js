import styled from "@emotion/styled";
import { SearchIcon } from "../Icons";
import { Button } from "./Button";
import { ContentXLarge } from "./Text";

const SearchFormContainer = styled.div`
  height: 40px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
  }

  input {
    width: 50%;
    border: none;
    background-color: #f6f6f987;
    border-radius: 20px;
    border-bottom: 2px solid #4bbd2e;
    color: #333;
    outline: none;
    padding: 8px 16px;
    font-size: 20px;
    font-weight: 500;
  }

  input:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export function SearchForm({ props }) {
  return (
    <SearchFormContainer>
      <SearchIcon />
      <input type="text" placeholder="Search foods..." />
      <Button><ContentXLarge>Search</ContentXLarge></Button>
    </SearchFormContainer>    
  )
}