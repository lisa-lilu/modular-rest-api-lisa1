import { Hono } from "hono";
import { prisma } from "../src/prisma";

const posts = new Hono();

// Create post
posts.post("/", async (c) => {
  const body = await c.req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      userId: body.userId,
    },
  });

  return c.json(post);
});

// Get all posts
posts.get("/", async (c) => {
  const data = await prisma.post.findMany({
    include: {
      user: true,
      comments: true,
    },
  });

  return c.json(data);
});

// Get posts by user
posts.get("/user/:userId", async (c) => {
  const userId = Number(c.req.param("userId"));

  const data = await prisma.post.findMany({
    where: { userId },
    include: {
      comments: true,
    },
  });

  return c.json(data);
});

export default posts;