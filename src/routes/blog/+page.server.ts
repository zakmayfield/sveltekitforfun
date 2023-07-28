import posts from './data';
import type { Post } from './data';

type Summary = Omit<Post, 'content'>;
type Summaries = Summary[];
type LoadResult = {
	summaries: Summaries;
};

export function load(): LoadResult {
	return {
		summaries: posts.map<Summary>((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
