import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "./order.types";

const initialState: OrderState = {
    status: "idle",
    orders: [],
    modal: false,
    currentOrder: null,
    error: null
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload;
        },
        setCurrentOrder: (state, action: PayloadAction<any>) => {
            state.currentOrder = action.payload;
        },
        setOrders: (state, action: PayloadAction<any>) => {
            state.orders = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearCurrentOrder: (state) => {
            state.currentOrder = null;
        },
    }
});

export const { 
    setModal, 
    setCurrentOrder, 
    setOrders, 
    setError, 
    clearCurrentOrder 
} = orderSlice.actions;

//Selectors
export const selectOrders = (state: { order: OrderState }) => state.order.orders;
export const selectModal = (state: { order: OrderState }) => state.order.modal;
export const selectCurrentOrder = (state: { order: OrderState }) => state.order.currentOrder;
export const selectError = (state: { order: OrderState }) => state.order.error;

export default orderSlice.reducer;