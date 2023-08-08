import { createTodo, getTodos } from '$lib/server/db.js';

export function load({ cookies }) {
	const id = cookies.get('userid');
	const visited = cookies.get('visited');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
		cookies.set('visited', 'true', { path: '/' });
	}

	return {
		visited,
		todos: getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data);
		createTodo(cookies.get('userid'), data.get('description'));
	}
};
