import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { user } from "./user";
import { db } from "./database";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use("/user", user);
app.use("/db", db);

app.use((req, res, next) => {
  res.status(404).send("Please enter a correct url. e.g: /user/bob");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});

export default app;
