import pb from '$lib/server/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const bookmarks = await pb.collection('bookmarks').getFullList({
		fetch,
		sort: '-created'
	});

	return {
		bookmarks
	};
};
