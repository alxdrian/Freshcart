import { LoginIcon } from "../components/Icons";
import { Button } from "../components/UI/Button";
import { AlterPageContainer, FormContainer } from "../components/UI/Container";
import { Form, FormControl } from "../components/UI/Form";
import { ContentXLarge, Title } from "../components/UI/Text";

export default function Login() {
  return (
    <AlterPageContainer>
      <FormContainer>
        <Title>Login</Title>
        <Form>
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
        </Form> 
        <Button>
          <LoginIcon />
          <ContentXLarge>Login</ContentXLarge>
        </Button>
      </FormContainer>
    </AlterPageContainer>
  );
}