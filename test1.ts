import express, { Express, Request, Response } from 'express';
const mongoose = require("mongoose");
import dotenv from 'dotenv';
import { model, Schema } from 'mongoose';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

const categorySchema = new Schema({
  _id: String,
  name: String,
});

const Category = model("Category", categorySchema);

mongoose
  .connect(
    "mongodb+srv://teal2022oyunsurenpurevsuren:GMNqs2612i2U1wjN@cluster0.bqab1l0.mongodb.net/blog"
  )
  .then(() => console.log("Connected"));


    app.get("/category" , async (req : Request, res : Response) => {
      try {
        const list  =  await Category.find();
        res.status(200).json(list);
      } catch (error) {
        res.status(500).json({error : error});
      }
      
    }) 

app.listen(port, () => {
console.log(`⚡️ [server]: Server is running at http://localhost:${port}`)});