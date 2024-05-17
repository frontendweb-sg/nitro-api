import mongoose from "mongoose";

export async function useDatabase() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Mongoose connected!");
	} catch (error) {
		throw createError({
			status: 500,
			message: error.message,
		});
	}
}
