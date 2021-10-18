import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Book {
  id: string;
  name: string;
  author: string;
  publisher: string;
  importedDate: string;
  bookLocation: string;
  category: string;
  isbn: string;
}

interface Books {
  currentCategory: string,
  searchByName: string;
  bookList: Book[];
  categories: string[]
}

const initialState: Books = {
  currentCategory: '',
  searchByName: '',
  categories: ['Energy Industry Consult', 'Inspiration'],
  bookList: [
    {
      id: 'EIC0001',
      name: '2019年中国电力行业投资报告',
      author: '南方电网 能源发展研究院',
      publisher: '中国电力出版社',
      importedDate: '2021-7-12',
      bookLocation: '2',
      category: 'Energy Industry Consult',
      isbn: '9787519840846'
    },
    {
      id: 'EIC0002',
      name: '2019年全球水电行业年度发展报告',
      author: '国家水电可持续发展 研究中心',
      publisher: '中国水利水电出版社',
      importedDate: '2021-7-12',
      bookLocation: '2',
      category: 'Energy Industry Consult',
      isbn: '9787517089216'
    },
    {
      id: 'In0001',
      name: 'Sex & The Psych',
      author: 'Brett Kahr',
      publisher: '华东师范大学出版社',
      importedDate: '2021-7-12',
      bookLocation: '1',
      category: 'Inspiration',
      isbn: '9780141024844'
    }
  ]
}
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.bookList.push(action.payload);
    },
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    }
  }
})

// actions
export const { addBook, setCurrentCategory } = booksSlice.actions;

// selectors
const selectBookList = (state: RootState): Book[] => state.books.bookList;
export const selectBookCategories = (state: RootState): string[] => state.books.categories;
export const selectCurrentCategory = (state: RootState): string => state.books.currentCategory;
const selectSearchByName = (state: RootState): string => state.books.searchByName;

export const selectBooksByCategory = createSelector(
  selectBookList,
  selectCurrentCategory,
  (bookList, currentCategory): Book[] => {
    if (currentCategory === '' || currentCategory === 'All') {
      return bookList;
    } else {
      return bookList.filter((b) => b.category !== currentCategory)
    }
  }
)
export const selectBooksByName = createSelector(
  selectBookList,
  selectSearchByName,
  (bookList, searchByName): Book[] =>
    bookList.filter(b => b.name.includes(searchByName))
)

// reducer
export default booksSlice.reducer;

