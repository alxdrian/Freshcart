import styled from "@emotion/styled";
import { ContentSmall } from "./Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80%;
  height: fit-content;
  input {
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #4bbd2e;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    color: #4bbd2e;
  }
  input:focus {
    outline: none;
    border: 1px solid #4bbd2e;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  input::placeholder {
    color: #BDBDBD;
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
        <ContentSmall>{props.name}</ContentSmall>
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