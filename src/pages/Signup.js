import { SignupIcon, HomeIcon, LoginIcon } from "../components/Icons";
import { Button, HomeButton } from "../components/UI/Button";
import { AlterPageContainer, FormContainer, Container } from "../components/UI/Container";
import { Form, FormControl } from "../components/UI/Form";
import { ContentXLarge, Title } from "../components/UI/Text";
import { useNavigate } from "react-router";
import { useState } from "react";
import { SignupFetch } from "../services/FetchUsers";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
    password_confirmation: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await SignupFetch(form);
    if (response.jti) {
      sessionStorage.setItem("token", response.jti);
      navigate("/");
    }
  }

  return (
    <AlterPageContainer>
      <FormContainer>
        <Title>Signup</Title>
        <Form onSubmit={handleSubmit}>
          <FormControl 
            type="text"
            id="name"
            name="Name"
            placeholder="Example"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <FormControl 
            type="text"
            id="surname"
            name="Surname"
            placeholder="Example"
            value={form.surname}
            onChange={(e) => setForm({...form, surname: e.target.value})}
          />
          <FormControl 
            type="text"
            id="address"
            name="Address"
            placeholder="Lima, Peru"
            value={form.address}
            onChange={(e) => setForm({...form, address: e.target.value})}
          />
          <FormControl 
            type="email"
            id="email"
            name="Email"
            placeholder="somebody@mail.com"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
          <FormControl 
            type="password"
            id="password"
            name="Password"
            placeholder="********"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
          />
          <FormControl 
            type="password"
            id="password"
            name="Password Confirmation"
            placeholder="********"
            value={form.password_confirmation}
            onChange={(e) => setForm({...form, password_confirmation: e.target.value})}
          />
          <Container>
            <Button type="submit">
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