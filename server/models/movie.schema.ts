import mongoose, {Schema, Document} from "mongoose";

export const MOVIE_TABLE = "Movie";
export interface Movie {
	author: string;
	title: string;
	year: string;
	genres: string[];
	rating: number;
	releaseDate: string;
	runtime: string;
	director: string;
	writer: string;
	actors: string[];
	plot: string;
	language: string;
	country: string;
	awards: string[];
	posterUrl: string;
	imdbRating: Number;
	imdbVotes: string;
	images: string[];
}

export interface MovieDoc extends Document<Movie>, Movie {}

const schema = new Schema(
	{
		author: {type: Schema.ObjectId, required: true, ref: USER_TABLE},
		title: {type: String, required: true},
		year: {type: String, required: true},
		actors: {type: [String], required: true},
		genres: {type: [String], required: true},
		releaseDate: {type: String, required: true},
		director: {type: String, required: true},
		rating: {type: Number, default: 0},
		runtime: {type: String, default: ""},
		writer: {type: String, default: ""},
		plot: {type: String, default: ""},
		language: {type: [String], default: []},
		country: {type: String, default: ""},
		awards: {type: [String], default: []},
		posterUrl: {type: String, default: ""},
		imdbRating: {type: Number, default: 0},
		imdbVotes: {type: String, default: ""},
		images: {type: [String], default: []},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform(doc, ret) {
				delete ret.__v;
				ret.id = ret._id;
			},
		},
	},
);

export const Movie = mongoose.model<MovieDoc>(MOVIE_TABLE, schema);
