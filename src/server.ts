import express, { type Request, type Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 8080;
const APP_DIR = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(APP_DIR, "views"));

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("サーバー起動");
});
