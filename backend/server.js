import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import movieRoutes from "./routes/movieRoutes.js";
import actorRoutes from "./routes/actorRoutes.js";
import producerRoutes from "./routes/producerRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import morgan from "morgan";

config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/producers", producerRoutes);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
