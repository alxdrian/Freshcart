const BASE_URL = "https://freshcart-backend.herokuapp.com";

export function LoginFetch(email, password) {
  return (
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  )
}

export function LogoutFetch() {
  return (
    fetch(`${BASE_URL}/logout`, {
      method: "DELETE",
    })
    .catch(error => console.log(error))
  )
}

export function SignupFetch(form) {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name: form.name,
          surname: form.surname,
          email: form.email,
          address: form.address,
          password: form.password,
          password_confirmation: form.password_confirmation
        }
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  )
}