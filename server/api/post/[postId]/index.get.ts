export default defineEventHandler(async (event) => {
	const store = await useStorage().getItem("user:key");
	console.log("s", store);
	return {
		store,
		version: "api",
		method: event.method,
		path: event.path,
		context: event.context,
		heades: event.headers,
	};
});
