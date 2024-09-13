import { remultSveltekit } from 'remult/remult-sveltekit';
import { AuthController } from '../../../shared/AuthController';
import type { UserInfo } from 'remult';

export const _api = remultSveltekit({
	getUser: async (events) => {
		console.log('getUser');
		const session = await events.locals.auth();
		return session?.user as UserInfo;
	},
	async initRequest(request, options) {
		console.log(`initRequest`, request.url.href);
		console.log('');
	},
	entities: [],
	controllers: [AuthController]
});

export const { GET, POST, PUT, DELETE } = _api;
