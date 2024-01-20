import mongoose from "mongoose"
import { DB_PASSWORD } from "./secret.js"
const URI = `mongodb+srv://Mykola3:${DB_PASSWORD}@cluster0.p57nons.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });
