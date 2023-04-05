import  { Request, Response } from 'express';
import { Movie } from "./movieModel";

export async function getMovies (req : Request, res : Response) {
    const list  =  await Movie.find().limit(5);
    res.json(list)
}