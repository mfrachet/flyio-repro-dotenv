import * as Express from "express";

export const publicRouter = Express.Router();
publicRouter.get("/", (req, res) => {
  res.send({ hello: "world" });
});
