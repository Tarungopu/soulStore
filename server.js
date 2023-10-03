import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path, { dirname } from "path";
import colors from "colors";
import ProductRoutes from "./server/Routes/ProductRoutes.js";
import userroutes from "./server/Routes/UserRoutes.js";
import orderroutes from "./server/Routes/OrderRoutes.js";
import uploadroutes from "./server/Routes/UploadRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const NODE_ENV = "production";

app.use("/econ1/products", ProductRoutes);
app.use("/users", userroutes);
app.use("/upload", uploadroutes);
app.use("/orders", orderroutes);

mongoose
  .connect("mongodb+srv://satya1:satya1@cluster0.t3dbm.mongodb.net/onestop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => console.log("im connected to atlas  database bro".underline.blue))
  .catch((err) => console.log(`${err}`.underline.red));
const __dirname = path.resolve();
console.log(__dirname);
app.use("/uploads", express.static(path.join(__dirname, "/Uploads")));

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  console.log(path.join(__dirname, "/client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
  console.log(path.resolve(__dirname, "client", "build", "index.html"));
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(
  process.env.PORT,
  console.log(
    `Hi im up and Running good and running on ${process.env.PORT}`.blue
  )
);
