import express from "express";
import { db } from "@repo/db";

const app = express();

// Without this, req.body is undefined for JSON requests.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  const { username, email } = req.body ?? {};

  if (typeof email !== "string" || email.length === 0) {
    res.status(400).json({ message: "email is required" });
    return;
  }

  try {
    const user = await db.orm.public.User.create({ username, email });
    res.json({ message: "Signup successful", id: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Port 3000 is used by the web app, so the API runs on 3002.
const port = Number(process.env.PORT ?? 3002);
app.listen(port, () => {
  console.log(`http-server listening on http://localhost:${port}`);
});
