import { error } from '@sveltejs/kit';
import type { Post } from '@prisma/client';
import prisma from '$lib/prisma';

export async function load({ params }): Promise<{ post?: Post }> {
	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug
		}
	});

	if (!post) throw error(404);

	return {
		post
	};
}
