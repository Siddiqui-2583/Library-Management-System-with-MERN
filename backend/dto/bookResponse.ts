import { IBook } from "../models/book";

export interface IBookResponse {
  books: IBook[];
  totalBookCount: number;
  pageNumber: number;
  booksPerPage: number;
}

export interface IBookRequest {
  filter: string;
  keyword: string;
  pageNumber: number;
  pageSize: number;
}
