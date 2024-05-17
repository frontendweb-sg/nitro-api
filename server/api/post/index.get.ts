export default defineEventHandler((event) => {
	return {
		version: "api",
		method: event.method,
		path: event.path,
		context: event.context,
		heades: event.headers,
	};
});
