import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello, Hono!",
  });
});

app.get("/hello", (c) => {
  return c.json({
    message: "Hello, Hono!",
  });
});

app.get("/hell2o", (c) => {
  return c.json({
    message: "Hello, Hono!",
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
