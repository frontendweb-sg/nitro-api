export default defineNitroPlugin(async (event) => {
	await connectDb();
});
