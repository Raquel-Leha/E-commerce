import { productActions } from "../actions/productsActions";

export const initialState = {
  isLoading: false,
  products: [],
  errorMessage: "",
};

export const productsReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case productActions.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case productActions.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case productActions.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case productActions.LOAD_SAVE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case productActions.LOAD_SAVE_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case productActions.LOAD_SAVE_PRODUCT_SUCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    default:
      return state;
  }
};
