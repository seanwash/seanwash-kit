import { logger } from '$lib/server/logger';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Combined format
	// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
	const payload = [
		event.getClientAddress(),
		event.request.method,
		event.request.url,
		response.status,
		event.request.headers.get('referer'),
		response.headers.get('content-length'),
		event.request.headers.get('user-agent')
	].join(' ');

	logger.info(payload);

	return response;
};
