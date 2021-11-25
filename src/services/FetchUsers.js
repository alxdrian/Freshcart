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
