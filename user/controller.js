import { Router } from "express";
import { Service } from "./service";

const user = Router();
const service = new Service();

user.get("/", (req, res) => {
  return res.send("Please include a name in the parameter");
});

user.get("/id", (req, res) => {
  const id = service.generateId();
  return res.send({ id });
});

user.get("/:name", (req, res) => {
  const { name } = req.params;
  const id = service.generateId();
  res.render("index", { name, id });
});

user.post("/", async (req, res) => {
  const { name, age } = req.body;
  let { count } = req.body;
  const result = await service.saveUser();
  if (result) {
    return res.render("success", { name, count: count || 0 });
  } else {
    return res.render("retry", {
      name,
      age,
      count: count ? ++count : 1,
    });
  }
});

export { user };
