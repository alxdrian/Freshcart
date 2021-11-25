const BASE_URL = "https://freshcart-backend.herokuapp.com";

export function LoginFetch(email, password) {
  return (
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
    .then(response => {
      for (let pair of response.headers.entries()) {
        if (pair[0] === "Authorization") {
          localStorage.setItem("token", pair[1]);
        }
      }
      return response.json();
    })
    .catch(error => console.log(error))
  )
}
