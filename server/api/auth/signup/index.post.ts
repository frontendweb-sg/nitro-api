import {object, string} from "zod";

const validator = object({
	name: string().min(1),
	email: string().email().min(1),
	password: string().min(8).max(16),
	mobile: string().min(10).max(10),
});

export default defineEventHandler(async (event) => {
	try {
		const body = await readValidatedBody(event, validator.safeParse);
		const user = await User.findOne({email: body.data.email});

		if (user) {
			throw createError({
				status: 400,
				message: "User already exited, Please use another email",
			});
		}

		const newUser = new User(body.data);
		const result = await newUser.save();
		setResponseStatus(event, 201, "User created successfully.");
		return result;
	} catch (error) {
		throw createError({
			status: 400,
			message: error.message,
		});
	}
});
