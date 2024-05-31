import express from "express";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import "./config/db.js";

//Routes
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import swaggerSpec from "./config/swagger.js";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

// // get __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(
//   "/api/docs",
//   express.static(path.join(__dirname, "node_modules", "swagger-ui-dist"))
// );

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/api", authRouter);
app.use("/api", taskRouter);

app.listen(port, () => {
  console.log(
    `Server listening on port ${port} and starting at http://localhost:${port}`
  );
});
