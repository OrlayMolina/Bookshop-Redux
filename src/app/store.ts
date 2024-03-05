import { configureStore } from '@reduxjs/toolkit';
import bookreducer from '../features/book/bookSlice';
import userReducer from '../features/user/userSlice';
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
    reducer: {
        book: bookreducer,
        user: userReducer,
        order: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store