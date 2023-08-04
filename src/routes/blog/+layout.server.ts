import type { Post } from './data';
import prisma from '$lib/prisma';

type Summary = Omit<Post, 'content'>;
type LoadResult = {
	summaries: Summary[];
};

export async function load(): Promise<LoadResult> {
	const result = await prisma.post.findMany({
		select: {
			title: true,
			slug: true
		}
	});

	return {
		summaries: result
	};
}
