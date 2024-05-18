import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const config = useRuntimeConfig();
		console.log("db", config.mongodbUri);
		await mongoose.connect(config.mongodbUri);
		console.log("Mongoose connected!");
	} catch (error) {
		throw createError({
			status: 500,
			message: error.message,
		});
	}
};
