import express, { Express, Request, Response } from 'express';
const mongoose = require("mongoose");
import dotenv from 'dotenv';
import { model, Schema } from 'mongoose';
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

mongoose
  .connect(
    "mongodb+srv://teal2022oyunsurenpurevsuren:GMNqs2612i2U1wjN@cluster0.bqab1l0.mongodb.net/sample_mflix"
  )
  .then(() => console.log("Connected"));


const categorySchema = new mongoose.Schema({
    _id: String,
    name: String,
  });
const Category = mongoose.model("Category", categorySchema);

    app.get("/category" , (req : Request, res : Response) => {
        const list  =  Category.find();
        res.json(list);
    }) 

app.listen(port, () => {
console.log(`⚡️ [server]: Server is running at http://localhost:${port}`)});



