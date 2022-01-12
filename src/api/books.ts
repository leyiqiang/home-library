import { axios } from './axios'
import { Book } from '../store/books/booksSlice';

const BOOK = '/book'
const BOOK_ALL = BOOK + '/all'


export const getAllBooks = async () => {
  return await axios.get<{ books: Book[] }>(BOOK_ALL);
}

export const getOneBookByID = async (id: string) => {
  return await axios.get<{ book: Book }>(BOOK + '/' + id);
}
