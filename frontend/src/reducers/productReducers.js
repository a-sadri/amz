import {
  PRODUCT_DETAILES_FAIL,
  PRODUCT_DETAILES_REQUEST,
  PRODUCT_DETAILES_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILES_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILES_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
