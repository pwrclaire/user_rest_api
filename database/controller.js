import { Router } from "express";

const db = Router();

db.post("/save", (req, res) => {
  return res.send(!Math.round(Math.random()));
});

export { db };
