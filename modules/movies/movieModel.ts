import { model, Schema } from 'mongoose';
export interface IMovie {
    _id : String,
    title : String
}

const movieSchema = new Schema<IMovie>({
    _id : String,
    title : String
});

 export const Movie = model<IMovie>("Movie", movieSchema);