import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { publicRouter } from "./public-router";

export const httpServer = Express();

httpServer.use(cors({ credentials: true, origin: true }));
httpServer.use(Express.urlencoded({ extended: true }));
httpServer.use(Express.json());
httpServer.use(cookieParser());

httpServer.use(publicRouter);
