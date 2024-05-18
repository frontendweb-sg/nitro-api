export default defineNitroPlugin((nitro) => {
	// nitro.hooks.hook("close", () => {
	// 	consola.log("I am being close... tada");
	// });
	consola.info("Using consola 3.0.0");
	// nitro.hooks.hookOnce("render:response", (a) => console.log("called once", a));
	// nitro.hooks.beforeEach((e) => consola.log("I am being close... tada", e));
});
