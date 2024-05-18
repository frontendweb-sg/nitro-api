import {useUserByQuery} from "~/utils/lib/useUser";

export default defineEventHandler(async (event) => {
	const response = await $fetch<UserDoc[]>("/api/users");

	const user = await useUserByQuery(event);
	console.log("user", user);
	return `
		<html>
		<body>
		  <div>
		     <ul>
			 ${response.map((user) => `<li><a href='users?userId=${user.id}'>${user.name}</a></li>`)}</ul>
		  </div>
	  	${user}
		</body>
		</html>
	`;
});
