import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartAdapter = createEntityAdapter({
    selectId: (item)=>item.id
});

export const sendCartDataToApi = createAsyncThunk(
    'cart/sendCartDataToApi',
    
    async (cb, { getState }) => {
        const cartItems = cartSelectors.selectAll(getState());
        try{
            cartItems.map((item) => {
                axios({
                    method: "post",
                    url: `http://api-kavkev.kg:8080/api/product/${item.id}/cart/`,
                    headers: {
                        Authorization: `Token ${localStorage.userToken}`,
                    },
                    data: {
                        amount: `${item.count}`,
                    },
                });
            });
        } catch(e){
            alert(`Просим прощения, ${item.name_product} в наличии нет`);
        }

        if(typeof cb === 'function') cb();
        return 'OK'
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: cartAdapter.getInitialState({
        totalPrice: 0
    }),
    reducers: {
        addItemToCart: cartAdapter.addOne,
        removeItemFromCart: cartAdapter.removeOne,
        clearCart: cartAdapter.removeAll,
        changeCartItemCount: (state, {payload: { id, newCount }})=>{
            const cartItem = localCartSelector.selectById(state, id);
            cartAdapter.updateOne(state, {
                id,
                changes: {
                    count: newCount,
                    subPrice: parseInt(cartItem.item.amount) * parseInt(cartItem.item.price)
                }
            })
        }
    },

    extraReducers: (builder) => {
        builder.addCase(sendCartDataToApi.pending, (state)=>{
            console.log("Cart sending...");
        })
        builder.addCase(sendCartDataToApi.rejected, (state, error)=>{
            console.log("Cart sending Failed!!");
        })
        builder.addCase(sendCartDataToApi.fulfilled, (state, action)=>{
            console.log("Cart sending success", action.payload);// 'OK'
        })
    }
})

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    changeCartItemCount,
} = cartSlice.actions;

const localCartSelector = cartAdapter.getSelectors();
export const cartSelector = (state)=>state.cart;
export const cartSelectors = cartAdapter.getSelectors(cartSelector);
export default cartSlice