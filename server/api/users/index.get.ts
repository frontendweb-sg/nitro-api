export default defineEventHandler(async (event) => {
	try {
		const users = await User.find({});
		return users;
	} catch (error) {
		throw createError({
			status: 400,
			message: error.message,
		});
	}
});
