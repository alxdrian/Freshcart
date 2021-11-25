import { useReducer } from "react";

const ADD_FOOD = "ADD_FOOD";
const REMOVE_FOOD = "REMOVE_FOOD";
const CHANGE_COUNT = "CHANGE_COUNT";
const CLEAN_ORDER = "CLEAN_ORDER";

function orderReducer(state, action) {
  switch (action.type) {
    case ADD_FOOD:
      const food = action.food;
      localStorage.setItem("foods", JSON.stringify([...state.foods, food]));
      return {
        ...state,
        foods: [...state.foods, action.food],
      };
    case CHANGE_COUNT:
      const { foodId, count } = action;
      const changedFoods = state.foods.map((food) => { 
        if (food.id === foodId) {
          return { ...food, count };
        }
        return food;
      });
      localStorage.setItem("foods", JSON.stringify(changedFoods));
      return {
        ...state,
        foods: changedFoods,
      };
    case REMOVE_FOOD:
      const foods = state.foods.filter((food) => food.id !== action.id);
      localStorage.setItem("foods", JSON.stringify(foods));
      return {
        ...state,
        foods: foods,
      };
    case CLEAN_ORDER:
      localStorage.removeItem("foods");
      return {
        ...state,
        foods: [],
      };
    default:
      return state;
  }
}

function initialState(state) {
  const foods = localStorage.getItem("foods") || null;
  return {
    ...state,
    foods: foods ? JSON.parse(foods) : [],
  };
}

export default function useOrderReducer() {
  const [state, dispatch] = useReducer(orderReducer, {
    foods: [],
  }, initialState);

  return [state, dispatch];
}