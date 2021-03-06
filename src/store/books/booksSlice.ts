import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/constants';
import { allBooks, bookInfoByID } from './booksActions';

export interface Book {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  importedDate: string;
  location: string;
  category: string;
  isbn: string;
}

interface Books {
  currentCategory: string,
  searchByName: string;
  currentBookInfo: Book | undefined;
  bookList: Book[];
  categories: string[];
  status: STATUS.IDLE | STATUS.LOADING;
  error: string | undefined;
}

const initialState: Books = {
  status: STATUS.IDLE,
  error: undefined,
  currentCategory: 'All',
  currentBookInfo: undefined,
  searchByName: '',
  categories: ['All', 'Energy Industry Consult', 'Inspiration'],
  bookList: [
    {
      _id: 'EIC0001',
      title: '2019年中国电力行业投资报告',
      author: '南方电网 能源发展研究院',
      publisher: '中国电力出版社',
      importedDate: '2021-07-12',
      location: '2',
      category: 'Energy Industry Consult',
      isbn: '9787519840846'
    },
  ]
}
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
    setSearchByTitle: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(allBooks.pending, (state, action) => {
        state.status = STATUS.LOADING;
        state.error = '';
      })
      .addCase(allBooks.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.bookList = action.payload.books || [];
        const s: Set<string> = new Set(state.bookList.map(b => b.category));
        const a: string[] = Array.from(s);
        a.splice(a.indexOf(""), 1)
        state.categories = ['All', ...a, "Unknown"]
        state.error = '';
      })
      .addCase(allBooks.rejected, (state, action) => {
        state.status = STATUS.IDLE;
        state.error = action.error.message;
      })
      .addCase(bookInfoByID.pending, (state, action) => {
        state.status = STATUS.LOADING;
        state.currentBookInfo = undefined;
        state.error = '';
      })
      .addCase(bookInfoByID.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.currentBookInfo = action.payload;
        state.error = '';
      })
      .addCase(bookInfoByID.rejected, (state, action) => {
        // state.status = STATUS.IDLE;
        state.currentBookInfo = undefined;
        state.error = action.error.message;
      })
  }
})

// reducer
export default booksSlice.reducer;

