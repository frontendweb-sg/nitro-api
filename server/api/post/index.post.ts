// defineRouteMeta({
// 	openAPI: {
// 		tags: ["test"],
// 		description: "Test route description",
// 		parameters: [{in: "query", name: "test", required: true}],
// 	},
// });
export default defineEventHandler(async (event) => {
	const store = useStorage("user").setItem("key", "hello");
	const formData = await readFormData(event);
	const img = formData.get("image") as File;
	const t = formData.get("title");
	console.log("img", img, t);
	return {
		t: t,
		img: img.name,
	};
	//return await readBody(event);
});
