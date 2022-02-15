// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const he = {
//     headers: {
//         Authorization: `Token ${localStorage.userToken}`,
//     }
// }
// export const fetchCartItems = async () => {
//     const response = await axios
//         .get("http://kavkev.kg:8080/api/my_cart/", he)
//         .catch((err) => {
//             console.log("Err: ", err);
//         });
//         console.log(response)
// };

// const CartSlice = createSlice({
//     name: "carts",
//     initialState: {
//         cart: []
//     },
//     reducers: {},

//     extraReducers: (builder) => {
//         builder.addCase(fetchCartItems.pending, (state) => {
//             state.loading = true;
//         });
//         builder.addCase(fetchCartItems.rejected, (state, action) => {
//             state.error = action.error.message;
//             state.loading = false;
//         });
//         builder.addCase(fetchCartItems.fulfilled, (state, action) => {
//             cartAdapter.setAll(state, action.payload.cart_items);
//             state.loading = false;
//         });

//     }

// })

// export const { } = CartSlice.actions;
// export const SelectCarts = state => state.cart.cart
// export default CartSlice.reducer