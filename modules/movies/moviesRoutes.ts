import { Router } from "express";
import { getMovies } from "./moviesController";

const router = Router();

router.get("/", getMovies)

export const moviesRouter = router