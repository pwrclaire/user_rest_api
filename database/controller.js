import { Router } from "express";

const db = Router();

db.post("/save", (req, res) => {
  const successful = !Math.round(Math.random());
  return res.send(successful);
});

export { db };
