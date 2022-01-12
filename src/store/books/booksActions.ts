import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks, getOneBookByID } from '../../api/books';
import { booksSlice } from './booksSlice';

interface BookValidationError {
  message: string
}

export const { setCurrentCategory, setSearchByTitle } = booksSlice.actions;
export const allBooks = createAsyncThunk('/books/allBooks', async () => {
  const res = await getAllBooks();
  return res.data;
})

export const bookInfoByID = createAsyncThunk('/books/bookInfoByID', async (id: string) => {
  const res = await getOneBookByID(id);
  return res.data.book;
})



