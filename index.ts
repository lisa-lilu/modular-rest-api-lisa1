import { Hono } from "hono";
import { serve } from "@hono/node-server";

import users from "./routes/user.routes";
import posts from "./routes/post.routes";
import comments from "./routes/comment.routes";

const app = new Hono();

app.route("/users", users);
app.route("/posts", posts);
app.route("/comments", comments);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server running on http://localhost:${info.port}`);
  }
);