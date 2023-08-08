// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid?: string) {
	if (!db.get(userid)) {
		db.set(userid, [
			{
				id: crypto.randomUUID(),
				description: 'Learn SvelteKit',
				done: false
			}
		]);
	}

	return db.get(userid);
}

export function createTodo(userid: string | undefined, description: FormDataEntryValue | null) {
	let todos = db.get(userid);

	if (!todos) {
		todos = [];
		db.set(userid, todos);
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid: string, todoid: string) {
	const todos = db.get(userid);
	const index = todos.findIndex(
		(todo: { id: string; description: string; done: boolean }) => todo.id === todoid
	);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
