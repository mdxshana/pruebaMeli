import http from "http";
import express, { Express } from "express";
import routes from "./routes/products";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT;

const router: Express = express();

router.use(express.urlencoded({ extended: false }));

router.use(cors());

router.use(express.json());

router.use("/api", routes);

const httpServer = http.createServer(router);

httpServer.listen(port, () =>
  console.log(`The server is running on port ${port}`)
);
