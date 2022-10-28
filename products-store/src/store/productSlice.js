import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.status = STATUSES.SUCCEEDED;
      state.data = action.payload;
    },
    setProcductsStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { fetchProducts, setProcductsStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProductsAsync = () => async (dispatch, getState) => {
  dispatch(setProcductsStatus(STATUSES.LOADING));
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch(fetchProducts(data));
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch products", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(setProcductsStatus(STATUSES.FAILED));
  }
};
