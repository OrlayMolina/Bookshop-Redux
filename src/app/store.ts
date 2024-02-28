import { configureStore } from '@reduxjs/toolkit';
import bookreducer from '../features/book/bookSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        book: bookreducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store