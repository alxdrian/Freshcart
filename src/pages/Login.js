import { LoginIcon, HomeIcon, SignupIcon } from "../components/Icons";
import { Button, HomeButton } from "../components/UI/Button";
import { AlterPageContainer, Container, FormContainer } from "../components/UI/Container";
import { Form, FormControl } from "../components/UI/Form";
import { ContentXLarge, Title } from "../components/UI/Text";
import { useState } from "react";
import { LoginFetch } from "../services/FetchUsers";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await LoginFetch(email, password);
    if (response.jti) {
      sessionStorage.setItem("token", response.jti);
      navigate("/");
    }
 };

  return (
    <AlterPageContainer>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <FormControl 
            type="email"
            id="email"
            name="Email"
            placeholder="somebody@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl 
            type="password"
            id="password"
            name="Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Container>
            <Button type="submit">
              <LoginIcon />
              <ContentXLarge>Login</ContentXLarge>
            </Button>
            <Button onClick={()=> navigate("/signup")}>
              <SignupIcon />
              <ContentXLarge>Signup</ContentXLarge>
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