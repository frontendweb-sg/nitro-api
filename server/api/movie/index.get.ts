export default defineEventHandler(async (event) => {
	try {
		let {sort, limit, ...rest} = getQuery(event);

		limit = limit ?? 10;

		const movies = await Movie.aggregate([
			{
				$match: rest ? rest : {},
			},
		]).limit(Number(limit));

		return movies;
	} catch (error) {
		throw createError({
			status: 400,
			message: error.message,
		});
	}
});
