import { Hono } from "hono";
import { createUser, getUsers, getUserPosts } from "../src/services/userService";

const users = new Hono();


users.post("/", async (c) => {
  const body = await c.req.json();
  const user = await createUser(body);
  return c.json(user);
});

users.get("/", async (c) => {
  const data = await getUsers();
  return c.json(data);
});


users.get("/:id/posts", async (c) => {
  const id = Number(c.req.param("id"));
  const data = await getUserPosts(id);
  return c.json(data);
});

export default users;