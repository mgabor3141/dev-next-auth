import { remultSveltekit } from 'remult/remult-sveltekit';
import { AuthController } from '../../../shared/AuthController';
import type { UserInfo } from 'remult';

export const _api = remultSveltekit({
	getUser: async (events) => {
		const session = await events.locals.auth();
		return session?.user as UserInfo;
	},
	entities: [],
	controllers: [AuthController]
});

export const { GET, POST, PUT, DELETE } = _api;
