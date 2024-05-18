export default defineEventHandler(async (event) => {
	const userId = getRouterParam(event, "userId");
	const user = await User.findById(userId);
	console.log("u", userId);
	return user;
});
