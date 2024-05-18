export default defineEventHandler(async (event) => {
	const userId = getRouterParam(event, "userId");
	const response = await $fetch<UserDoc>("/api/users/" + userId);
	return `
		<html>
		<body>
		  <div>
		     ${response.name}
		  </div>
		</body>
		</html>
	`;
});
