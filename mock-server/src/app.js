import express from "express";
import bodyParser from "body-parser";
import mainRouter from "./routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", mainRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  require('./services/mongoDb')
  console.log(`Server is running on PORT ${PORT}`);
});
