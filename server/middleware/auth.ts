export default defineEventHandler((event) => {
	const header = event.headers.get("Authorization");
	const path = event.path;

	if (path.startsWith("/api/movie")) {
		if (!header)
			throw createError({status: 401, message: "Unauthorized access"});
		const token = header.split(" ")[1];
		const verify = Jwt.verify(token) as any;
		if (!verify) throw createError({status: 401, message: "invalid token"});
		event.context.user = verify;
	}
});
