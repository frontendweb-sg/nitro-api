//https://nitro.unjs.io/config
export default defineNitroConfig({
	srcDir: "server",
	database: {
		default: {
			connector: "postgresql",
			options: {},
		},
	},
	imports: {
		dirs: ["./server/models/**"],
	},
	routeRules: {
		"/api/**": {
			cors: true,
		},
	},
	runtimeConfig: {
		mongodbUri: "",
	},
});
