import { remultSveltekit } from 'remult/remult-sveltekit';
import { AuthController } from '../../../shared/AuthController';
import { remult, type UserInfo } from 'remult';

export const _api = remultSveltekit({
	getUser: async (events) => {
		// console.log('getUser');
		const session = await events.locals.auth();
		return session?.user as UserInfo;
	},
	async initRequest(request, options) {
		// log remult user
		console.log(`initRequest`, remult.user?.name, request.url.href);
	},
	entities: [],
	controllers: [AuthController]
});

export const { GET, POST, PUT, DELETE } = _api;
