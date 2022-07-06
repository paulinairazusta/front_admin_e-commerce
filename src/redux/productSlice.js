import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: [],
	reducers: {
		storeProduct(state, action) {
			state.push(
				action.payload.products.map((product) => {
					return product;
				})
			);
		},
	},
});

export const { storeProduct } = productSlice.actions;
export default productSlice.reducer;
