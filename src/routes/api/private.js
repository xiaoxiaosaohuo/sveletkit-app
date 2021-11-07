export async function get(request) {
	return {
		status: 200,
		body: {
			HEY: "I'm protected. You are logged in!"
		}
	};
}
