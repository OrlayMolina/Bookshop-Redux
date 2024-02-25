import { configureStore } from '@reduxjs/toolkit';
import bookreducer from '../features/book/bookSlice';

export const store = configureStore({
    reducer: {
        book: bookreducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store