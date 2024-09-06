import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { JsonFileDataProvider } from 'remult/server';
import { RemultAdapter } from '../../auth-adapter/src/index';
import type { UserInfo } from 'remult';

const dataProvider = new JsonFileDataProvider('db');
const { adapter } = RemultAdapter({ dataProvider });

export const { handle } = SvelteKitAuth({
	adapter,
	providers: [GitHub],
	callbacks: {
		async session({ session, user }) {
			const userFrontEnd: UserInfo = {
				id: user.id,
				name: user.name ?? undefined,
				roles: [],
				email: user.email,
				image: user.image ?? undefined
			};
			return {
				// ...session,
				expires: session.expires,
				user: userFrontEnd
			};
		}
	}
});
