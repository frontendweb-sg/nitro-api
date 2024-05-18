import {object, string} from "zod";

const validator = object({
	email: string().email("Invalid email").min(1),
	password: string().min(8).max(16),
});

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, validator.safeParse);

	try {
		if (body.error) {
			throw createError({
				status: 400,
				message: body.error.message,
			});
		}

		const user = await User.findOne({email: body.data.email}).select(
			"+password",
		);
		if (!user) {
			throw createError({
				status: 400,
				message: "User not found!",
			});
		}

		const verify = Password.compare(body.data.password, user.password);
		if (!verify) {
			throw createError({
				status: 401,
				message: "Invalid password!",
			});
		}

		return user;
	} catch (error) {
		throw createError({
			status: 400,
			message: error.message,
		});
	}
});