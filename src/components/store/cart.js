import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const indexItem = state.items.findIndex((item) => item.id === newItem.id);
      if (indexItem === -1) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          totalPrice: newItem.price,
          quantity: 1
        });
      } else {
        state.items[indexItem].totalPrice += state.items[indexItem].price;
        state.items[indexItem].quantity++;
      }
    },
    // ---------------------- second way ---------------------- 
    // addItemToCart(state, action) {
    //   const newItem = action.payload;
    //   const indexItem = state.items.find((item) => item.id === newItem.id);
    //   state.totalQuantity++;
    //   if (!indexItem) {
    //     state.items.push({
    //       id: newItem.id,
    //       price: newItem.price,
    //       title: newItem.title,
    //       totalPrice: newItem.price,
    //       quantity: 1
    //     });
    //   } else {
    //     indexItem.totalPrice += indexItem.price;
    //     indexItem.quantity++;
    //   }
    // },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const indexItem = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[indexItem].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[indexItem].quantity--;
        state.items[indexItem].totalPrice -= state.items[indexItem].price;
      }
    }
  }
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
