import { SignupIcon, HomeIcon, LoginIcon } from "../components/Icons";
import { Button, HomeButton } from "../components/UI/Button";
import { AlterPageContainer, FormContainer, Container } from "../components/UI/Container";
import { Form, FormControl } from "../components/UI/Form";
import { ContentXLarge, Title } from "../components/UI/Text";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();

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
          <Container>
            <Button>
              <SignupIcon />
              <ContentXLarge>Signup</ContentXLarge>
            </Button>
            <Button onClick={() => navigate("/login")}>
              <LoginIcon />
              <ContentXLarge>Login</ContentXLarge>
          </Button>
          </Container>
        </Form>
        <HomeButton onClick={() => navigate("/")}>
          <HomeIcon />
        </HomeButton>
      </FormContainer>
    </AlterPageContainer>
  );
}