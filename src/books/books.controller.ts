import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService, Book } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID: string): Promise<Book> {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO): Promise<Book[]> {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  @Delete()
  async deleteBook(@Query('bookID') bookID: string): Promise<Book[]> {
    const books = await this.booksService.deleteBook(bookID);
    return books;
  }
}
