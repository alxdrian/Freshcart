const BASE_URL = "https://freshcart-backend.herokuapp.com";

export function FoodsFetch() {
  return (
    fetch(`${BASE_URL}/foods`)
    .then(response => response.json())
    .catch(error => console.log(error))
  )
};
