import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.auth();
	return {
		remultUser: session?.user
	};
}) satisfies LayoutServerLoad;
