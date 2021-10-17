import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Book {
  id: string;
  name: string;
  author: string;
  publisher: string;
  importedDate: Date;
  bookLocation: string;
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

export const { addBook } = booksSlice.actions;

export const bookListSelector = (state: RootState): Book[] => state.books.bookList;
const searchByNameSelector = (state: RootState): string => state.books.searchByName;

export const selectBookByName = createSelector(
  bookListSelector,
  searchByNameSelector,
  (bookList, searchByName) => {
    bookList.filter(b => b.name.includes(searchByName))
  }
)

export default booksSlice.reducer;

