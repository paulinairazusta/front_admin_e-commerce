import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: [],
	reducers: {
		storeProduct(state, action) {
			return (state = action.payload);
		},
	},
});

export const { storeProduct } = productSlice.actions;
export default productSlice.reducer;
