export default defineCachedEventHandler(
	(event) => {
		return "User api ";
	},
	{
		maxAge: 60 * 60,
	},
);
