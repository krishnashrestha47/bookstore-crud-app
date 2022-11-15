import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("You have reached bookstore backend api");
});

app.listen(PORT, (err) => {
  err && console.log("Couldn't connect to the server");
  console.log(`The Server is running at http://localhost:${PORT}`);
});
