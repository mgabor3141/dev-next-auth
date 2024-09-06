import { sequence } from '@sveltejs/kit/hooks';

import { handle as handleAuth } from './auth';
import type { Handle } from '@sveltejs/kit';
import { _api } from './routes/api/[...remult]/+server';

export const handleRemult: Handle = async ({ event, resolve }) => {
	return await _api.withRemult(event, async () => {
		return resolve(event);
	});
};

export const handle = sequence(handleAuth, handleRemult);
