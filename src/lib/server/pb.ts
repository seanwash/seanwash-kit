import PocketBase from 'pocketbase';
import { PB_URL, PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD } from '$env/static/private';

const pb = new PocketBase(PB_URL);
await pb.admins.authWithPassword(PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD, {
	autoRefreshThreshold: 30 * 60
});

export default pb;
