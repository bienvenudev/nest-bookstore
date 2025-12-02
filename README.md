# Bookstore NestJS

A simple REST API built with NestJS, following the [DigitalOcean NestJS tutorial](https://www.digitalocean.com/community/tutorials/getting-started-with-nestjs).

## About

Practice project to learn NestJS fundamentals:
- Modules, Controllers, Services
- Dependency Injection
- DTOs (Data Transfer Objects)
- REST API endpoints (GET, POST, DELETE)

## API Endpoints

### Books (`/books`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:bookID` | Get a book by ID |
| POST | `/books` | Create a new book |
| DELETE | `/books?bookID=` | Delete a book |

### Users (`/users`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get a user by ID |
| POST | `/users` | Create a new user |
| DELETE | `/users?id=` | Delete a user |

## Run

```bash
npm install
npm run start:dev
```

App runs at `http://localhost:3000`

## Reference

- [Getting Started with NestJS - DigitalOcean](https://www.digitalocean.com/community/tutorials/getting-started-with-nestjs)
