Modular REST API with Hono + Prisma

A modular REST API built using Hono, Prisma ORM, and SQLite, demonstrating clean architecture, relational database design, and service-layer abstraction.

Features
Modular routing (Users, Posts, Comments)
RESTful API design
Prisma ORM with SQLite
Relational database structure
Service layer abstraction
Clean separation of concerns
TypeScript support
Lightweight Hono server
Tech Stack
Backend Framework: Hono
Database ORM: Prisma
Database: SQLite
Language: TypeScript
Runtime: Node.js
📁 Project Structure
src/
│
├── index.ts              # Main server entry
├── prisma.ts             # Prisma client setup
│
├── routes/
│   ├── user.routes.ts
│   ├── post.routes.ts
│   └── comment.routes.ts
│
├── services/
│   ├── userService.ts
│   ├── postService.ts
│   └── commentService.ts
│
prisma/
├── schema.prisma         # Database schema
└── migrations/           # Prisma migrations
Database Design
Entities:
User
id
name
email
Post
id
title
content
userId (FK → User)
Comment
id
content
postId (FK → Post)
Relationships:
A User has many Posts
A Post belongs to one User
A Post has many Comments
A Comment belongs to one Post

Setup Instructions
1. Install dependencies
npm install
2. Setup environment variables

Create a .env file:DATABASE_URL="file:./prisma/dev.db"
3. Run Prisma migrations npx prisma migrate dev --name init

4. Generate Prisma client
npx prisma generate

5. Start development server
npm run dev
Server runs at:
http://localhost:3000

 API Endpoints
 
 Users
POST /users → Create user
GET /users → Get all users
GET /users/:id/posts → Get posts of a user



 Posts

POST /posts → Create post
GET /posts → Get all posts
GET /posts/user/:userId → Get posts by user



 Comments

POST /comments → Create comment
GET /comments → Get all comments
GET /comments/post/:postId → Get comments for a post



 Architecture Overview
Routes → Services → Prisma → Database
Routes handle HTTP requests
Services contain business logic
Prisma handles database operations



 Learning Objectives
This project demonstrates:
Modular backend design
REST API development
Database relationships
Service layer pattern
Clean architecture principles


📄 License
ISC

👨‍💻 Author
Lielt Leul



