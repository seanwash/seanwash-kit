import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const post = await pb.collection('posts').getFirstListItem(`slug="${params.slug}"`, {
		fetch
	});

	return {
		post
	};
};
