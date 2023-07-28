import posts from './data';
import type { Post } from './data';

type Summary = Omit<Post, 'content'>;
type LoadResult = {
	summaries: Summary[];
};

export function load(): LoadResult {
	return {
		summaries: posts.map<Summary>((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
