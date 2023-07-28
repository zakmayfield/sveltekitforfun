import posts from '../data';
import type { Post } from '../data';

export function load({ params }): { post?: Post } {
	const post = posts.find((post: Post) => post.slug === params.slug);
	return {
		post
	};
}
