import { Hono } from "hono";
import { prisma } from "../src/prisma";

const comments = new Hono();

// Create comment
comments.post("/", async (c) => {
  const body = await c.req.json();

  const comment = await prisma.comment.create({
    data: {
      content: body.content,
      postId: body.postId,
    },
  });

  return c.json(comment);
});

// Get all comments
comments.get("/", async (c) => {
  const data = await prisma.comment.findMany({
    include: {
      post: true,
    },
  });

  return c.json(data);
});

// Get comments by post
comments.get("/post/:postId", async (c) => {
  const postId = Number(c.req.param("postId"));

  const data = await prisma.comment.findMany({
    where: { postId },
  });

  return c.json(data);
});

export default comments;