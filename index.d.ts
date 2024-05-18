declare module NodeJS {
	interface ProcessEnv {
		NITRO_MONGODB_URI: string;
		SECRET_KEY: string;
		NITRO_MONGODB_PRODU_URI: string;
	}
}
