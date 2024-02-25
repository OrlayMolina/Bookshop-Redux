import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BookProps, LiteraryGenreProps } from "./bookTypes";
import { getBooks } from "./bookAPI";
import { BookState } from "./bookTypes";

const initialState: BookState = {
  status: 'idle',
  books: [],
  totalItems: 0,
  literaryGenres: [],
  modal: false,
  currentLiteraryGenre: {
    id: 2,
    genre: 'Fantasy'
  },
  currentBook: null
};

export const fetchBooksAsync = createAsyncThunk<BookProps[]>(
  'book/fetchBooks',
  async () => {
    const response = await getBooks();
    return response.data;
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    setCurrentBook: (state, action: PayloadAction<BookProps>) => {
      state.currentBook = action.payload;
    },
    setCurrentLiteraryGenre: (state, action: PayloadAction<LiteraryGenreProps>) => {
      state.currentLiteraryGenre = action.payload;
    },
    setLiteraryGenres: (state, action: PayloadAction<LiteraryGenreProps[]>) => {
      state.literaryGenres = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    clearCurrentBook: (state) => {
      state.currentBook = null;
    },
    clearCurrentLiteraryGenre: (state) => {
      state.currentLiteraryGenre = null;
    },
    clearLiteraryGenres: (state) => {
      state.literaryGenres = [];
    },
    clearTotalItems: (state) => {
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.status = 'failed';
        state.books = [];
      });
  }
});

export const {
  openModal,
  closeModal,
  setCurrentBook,
  setCurrentLiteraryGenre,
  setLiteraryGenres,
  setTotalItems,
  clearCurrentBook,
  clearCurrentLiteraryGenre,
  clearLiteraryGenres,
  clearTotalItems
} = bookSlice.actions;

// Selectors
export const selectBooks = (state: { book: BookState }): BookProps[] => state.book.books;
export const selectCurrentBook = (state: { book: BookState }): BookProps | null => state.book.currentBook;
export const selectCurrentLiteraryGenre = (state: { book: BookState }): LiteraryGenreProps | null => state.book.currentLiteraryGenre;
export const selectLiteraryGenres = (state: { book: BookState }): LiteraryGenreProps[] => state.book.literaryGenres;
export const selectTotalItems = (state: { book: BookState }): number => state.book.totalItems;
export const selectModal = (state: { book: BookState }): boolean => state.book.modal;

export default bookSlice.reducer;
