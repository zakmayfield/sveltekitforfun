<script>
	export let data;
</script>

<h1>Blogs</h1>

{#each data.summaries as { slug, title }}
	<li><a href={`/blog/${slug}`}>{title}</a></li>
{/each}
