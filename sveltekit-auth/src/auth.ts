import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { JsonFileDataProvider } from 'remult/server';
import { RemultAdapter } from '../auth-adapter';

const dataProvider = new JsonFileDataProvider('db');
const { adapter } = RemultAdapter({ dataProvider });

export const { handle } = SvelteKitAuth({
	adapter,
	providers: [GitHub]
});
