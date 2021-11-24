import { SignupIcon } from "../components/Icons";
import { Button } from "../components/UI/Button";
import { AlterPageContainer, FormContainer } from "../components/UI/Container";
import { Form, FormControl } from "../components/UI/Form";
import { ContentXLarge, Title } from "../components/UI/Text";

export default function Signup() {
  return (
    <AlterPageContainer>
      <FormContainer>
        <Title>Signup</Title>
        <Form>
          <FormControl 
            type="text"
            id="name"
            name="Name"
            placeholder="Example"
          />
          <FormControl 
            type="text"
            id="surname"
            name="Surname"
            placeholder="Example"
          />
          <FormControl 
            type="text"
            id="address"
            name="Address"
            placeholder="Lima, Peru"
          />
          <FormControl 
            type="email"
            id="email"
            name="Email"
            placeholder="somebody@mail.com"
          />
          <FormControl 
            type="password"
            id="password"
            name="Password"
            placeholder="********"
          />
          <FormControl 
            type="password"
            id="password"
            name="Password Confirmation"
            placeholder="********"
          />
        </Form>
        <Button>
          <SignupIcon />
          <ContentXLarge>Signup</ContentXLarge>
        </Button>
      </FormContainer>
    </AlterPageContainer>
  );
}