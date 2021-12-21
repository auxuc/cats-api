import express, { Application, Request, Response } from "express";
import cors from 'cors'
import cats from "./src/api/v1/routes/cats";

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
const port = 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cats', cats)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
