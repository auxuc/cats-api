import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import { insertCat } from "./src/api/v1/services/cat";
dotenv.config();

const migrations = async () => {
  const knex = await import("./src/api/v1/services/db");
  console.log("running migrations");
  await knex.default.migrate.latest();
  console.log("migrations completed");
};

migrations().catch((err) => {
  console.error("migrations error", err);
});

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  await insertCat();

  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
