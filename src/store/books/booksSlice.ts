import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Book {
  id: string;
  name: string;
  author: string;
  publisher: string;
  importedDate: Date;
  bookLocation: string;
  isbn: string;
}

interface Books {
  searchByName: string;
  bookList: Book[]
}

const initialState: Books = {
  searchByName: '',
  bookList: []
}
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.bookList.push(action.payload);
    }
  }
})

// actions
export const { addBook } = booksSlice.actions;

// selectors
export const bookListSelector = (state: RootState): Book[] => state.books.bookList;
const searchByNameSelector = (state: RootState): string => state.books.searchByName;

export const selectBookByName = createSelector(
  bookListSelector,
  searchByNameSelector,
  (bookList, searchByName) => {
    bookList.filter(b => b.name.includes(searchByName))
  }
)

// reducer
export default booksSlice.reducer;

