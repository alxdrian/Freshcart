import styled from "@emotion/styled";
import { ContentLarge } from "./Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80%;
  height: fit-content;
  font-family: "Lato", sans-serif;

  label {
    color: #333333;
    font-weight: 600;
  }

  input {
    height: 40px;
    background: #f6f6f987;
    border: none;
    border-bottom: 2px solid #4bbd2e;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 8px 16px;
    color: #4bbd2e;
  }
  
  input:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  }

  input::placeholder {
    color: gray;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

export function FormControl(props) {
  const name = props.name.toLowerCase();

  return (
    <Container>
      <label htmlFor={name}>
        <ContentLarge>{props.name}</ContentLarge>
      </label>
      <input
        type={props.type}
        id={name}
        name={name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Container>
  )
};