import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const tools = await pb.collection('tools').getFullList({
		fetch,
		sort: '-created'
	});

	return {
		tools
	};
};
