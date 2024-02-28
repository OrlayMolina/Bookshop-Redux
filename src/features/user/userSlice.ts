import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserProps, UserState } from "./userTypes";
import { getUsers } from "./userAPI";

const initialState: UserState = {
    status: "idle",
    users: [],
    totalItems: 0,
    modal: false,
    currentUser: null
}

export const fetchBooksAsync = createAsyncThunk<UserProps[]>(
    'user/fetchUsers',
    async () => {
      const response = await getUsers();
      return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modal = true;
        },
        closeModal: (state) => {
            state.modal = false;
        },
        setCurrentUser: (state, action: PayloadAction<UserProps>) => {
            state.currentUser = action.payload;
        },
        setUsers: (state, action: PayloadAction<UserProps[]>) => {
            state.users = action.payload;
        },
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
        clearUsers: (state) => {
            state.users = [];
        }
    }
});

export const { 
    openModal, 
    closeModal, 
    setCurrentUser, 
    setUsers, 
    setTotalItems, 
    clearCurrentUser, 
    clearUsers
} = userSlice.actions;

// Selectors
export const selectUsers = (state: { user: UserState }) => state.user.users;
export const selectModal = (state: { user: UserState }) => state.user.modal;
export const selectCurrentUser = (state: { user: UserState }) => state.user.currentUser;
export const selectTotalItems = (state: { user: UserState }) => state.user.totalItems;
export const selectUserStatus = (state: { user: UserState }) => state.user.status;

export default userSlice.reducer;