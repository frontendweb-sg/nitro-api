export async function useUserById() {}

export async function useUserByQuery(event) {
	const query = getQuery(event);

	if (query.userId) {
		const response = await $fetch<UserDoc>("/users/" + query.userId);
		console.log("re", response);
		return response;
	}

	return "";
}
