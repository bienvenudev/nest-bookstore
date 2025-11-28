import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { CreateBookDTO } from './dto/create-book.dto';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
}

@Injectable()
export class BooksService {
  books: Book[] = BOOKS;

  getBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }

  getBook(bookID: string): Promise<Book> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }

  addBook(book: CreateBookDTO): Promise<Book[]> {
    return new Promise((resolve) => {
      this.books.push(book as Book);
      resolve(this.books);
    });
  }

  deleteBook(bookID: string): Promise<Book[]> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const index = this.books.findIndex((book) => book.id === id);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(index, 1);
      resolve(this.books);
    });
  }
}
