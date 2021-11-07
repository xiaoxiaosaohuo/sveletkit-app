export async function get(request) {
	return {
		status: 200,
		body: {
			HEY: "I'm NOT protected. You are NOT logged in!"
		}
	};
}
