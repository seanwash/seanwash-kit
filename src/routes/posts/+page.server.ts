import pb from '$lib/server/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const posts = await pb.collection('posts').getFullList({
		fetch,
		sort: '-published_at'
	});

	return {
		posts
	};
};
