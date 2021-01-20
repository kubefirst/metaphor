import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import path from "path";
// import dotenv from "dotenv";
// import fs from "fs";
// import logger from "./util/logger";


// if (fs.existsSync(".env")) {
//   logger.debug("Using .env file to supply config environment variables");
//   dotenv.config({ path: ".env" });
// }

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/healthz", homeController.healthz)


export default app;
