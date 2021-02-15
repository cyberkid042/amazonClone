export const initialState = {
  basket: [],
  user: null,
};

export function reducer(state, action) {
  // console.log(action)
  switch (action.type) {
    case "GET_ITEM_CART":
      return {
        ...state,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    default:
      return {
        ...state,
      };
  }
}
