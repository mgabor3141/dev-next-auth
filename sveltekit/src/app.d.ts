// See https://kit.svelte.dev/docs/types#app

import type { UserInfo } from 'remult';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module 'remult' {
	interface UserInfo {
		email: string;
		image?: string;
	}
}

import SvelteKitAuth, { type DefaultSession } from '@auth/sveltekit';
declare module '@auth/sveltekit' {
	interface Session {
		user: UserInfo & DefaultSession['user'];
	}
}
