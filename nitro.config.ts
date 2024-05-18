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
		imports: [
			{
				from: "consola",
				name: "consola",
			},
		],
	},
	routeRules: {
		"/api/**": {
			cors: true,
		},
	},
	runtimeConfig: {
		mongodbUri: "",
	},
	logLevel: {
		toFixed: 1,
	},
	experimental: {
		asyncContext: true,
	},
});
