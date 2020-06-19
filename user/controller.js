import { Router } from "express";
import { Service } from "./service";

const user = Router();
const service = new Service();

user.get("/", (req, res) => {
  return res.send({ message: "Please include name in parameter" });
});

user.get("/id", (req, res) => {
  const uuid = service.generateId();
  return res.send({ id: uuid });
});

user.get("/:user", (req, res) => {
  const user = req.params.user;
  const uuid = service.generateId();
  res.render("index", { name: user, id: uuid });
});

user.post("/", async (req, res) => {
  const result = await service.saveUser();
  if (result) {
    return res.render("success", { count: req.body.count || 0 });
  } else {
    return res.render("retry", {
      name: req.body.name,
      age: req.body.age,
      count: req.body.count ? ++req.body.count : 1,
    });
  }
});

export { user };
