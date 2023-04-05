import express, { Express } from 'express';
const mongoose = require("mongoose");
import dotenv from 'dotenv';
import { moviesRouter } from './modules/movies/moviesRoutes';
const cors = require('cors')
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://teal2022oyunsurenpurevsuren:GMNqs2612i2U1wjN@cluster0.bqab1l0.mongodb.net/sample_mflix"
  )
  .then(() => console.log("Connected"));

  app.use("/movies", moviesRouter)

app.listen(port, () => {
console.log(`⚡️ [server]: Server is running at http://localhost:${port}`)});



