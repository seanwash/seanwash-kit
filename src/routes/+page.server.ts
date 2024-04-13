import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const page = await pb.collection('pages').getFirstListItem(`slug="home"`, {
		fetch
	});

	return {
		page
	};
};
