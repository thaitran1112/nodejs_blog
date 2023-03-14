import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import routes from "./routes";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * ! HTTP logger
 */
// app.use(morgan("combined"));

/**
 * ! Template engine
 */
app.engine(".hbs", engine({
  extname: '.hbs',
}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, './resource/views'));

/**
 * ! Routes init
 */
routes(app)
app.listen(port, () => console.log(`Example app listening at localhost http://localhost:${port}`));
