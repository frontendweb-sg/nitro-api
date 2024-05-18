import {number, object, string} from "zod";
import {Movie} from "~/models/movie.schema";

const validator = object({
	author: string().default(""),
	title: string().min(1),
	year: string().min(4),
	genres: string().array().default([]),
	rating: number().default(0),
	runtime: string().default(""),
	releaseDate: string().date(),
	director: string().min(1),
	writer: string().optional().default(""),
	actors: string().array().default([]),
	plot: string().default(""),
	language: string().default(""),
	country: string().default(""),
	awards: string().array().default([]),
	poster: string().default(""),
	imdbRating: number().default(0),
	imdbVotes: string().default(""),
	images: string().array().default([]),
});
export default defineEventHandler(async (event) => {
	try {
		const body = await readValidatedBody(event, validator.safeParse);
		console.log(body.data, "data");
		body.data.author = event.context.user.id;
		const movie = new Movie(body.data);
		const result = await movie.save();
		setResponseStatus(event, 201, "Movie added successfully!");
		return result;
	} catch (error) {
		throw createError({
			message: error.message,
			status: 500,
		});
	}
});
