<script>
	export let data;
</script>

<h1>Home</h1>

<div>
	<p>Home Page</p>

	<div>
		<p>Hello, {data.visited ? 'Friend' : 'Stranger'}</p>
	</div>

	<div>
		<form method="POST" action="?/create">
			<label for="description">
				Add a todo:
				<input type="text" name="description" />
			</label>
		</form>
	</div>

	<ul>
		{#each data.todos as todo (todo.id)}
			<li>{todo.description}</li>
		{/each}
	</ul>
</div>
