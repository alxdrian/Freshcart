import { useContext, createContext } from "react";
import useOrderReducer from "../reducers/useOrderReducer";

const OrderContext = createContext({
  foods: [],
  addFood: () => {},
  removeFood: () => {},
  changeCount: () => {},
});

export function useOrderContext() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }
  return context;
}

export default function OrderProvider({ children }) {
  const [order, dispatch] = useOrderReducer();

  function addFood(food) {
    dispatch({ type: "ADD_FOOD", food });
  }

  function removeFood(id) {
    dispatch({ type: "REMOVE_FOOD", id });
  }

  function changeCount(foodId, count) {
    dispatch({ type: "CHANGE_COUNT", foodId, count });
  }

  const value = {
    ...order,
    addFood,
    removeFood,
    changeCount,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}